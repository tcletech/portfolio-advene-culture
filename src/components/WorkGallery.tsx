import { works, categories } from "../data/work"
import { useState, useEffect } from "react"

export default function WorkGallery() {
  const [activeCategory, setActiveCategory] = useState("Design & CAD");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const filteredWorks = works.filter((w) => w.category === activeCategory)
  
  // Track index of the top card in the stack
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right
  const [isAnimating, setIsAnimating] = useState(false)

  // Drag states
  const [dragStart, setDragStart] = useState<number | null>(null)
  const [dragOffset, setDragOffset] = useState(0)

  // Reset stack when category changes
  useEffect(() => {
    setCurrentIndex(0)
    setDirection(0)
    setDragOffset(0)
    setDragStart(null)
  }, [activeCategory])

  const triggerSwap = (forcedDir?: number) => {
    if (isAnimating || filteredWorks.length <= 1) return
    
    setIsAnimating(true)
    const dir = forcedDir !== undefined ? forcedDir : (Math.random() > 0.5 ? 1 : -1)
    setDirection(dir)
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredWorks.length)
      setDirection(0)
      setIsAnimating(false)
    }, 400) // Match animation duration
  }

  const onPointerDown = (e: React.PointerEvent) => {
    if (isAnimating || filteredWorks.length <= 1) return
    setDragStart(e.clientX)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStart === null) return
    setDragOffset(e.clientX - dragStart)
  }

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart === null) return
    e.currentTarget.releasePointerCapture(e.pointerId)
    
    if (Math.abs(dragOffset) > 80) {
      // Trigger swap if dragged far enough
      triggerSwap(dragOffset > 0 ? 1 : -1)
    } else if (Math.abs(dragOffset) < 5) {
      // Treat as click if barely moved
      triggerSwap()
    }
    
    setDragStart(null)
    setDragOffset(0)
  }

  return (
    <div className="flex flex-col items-center w-full">
      {/* Category Selection */}
      <div className="w-full mb-16 relative z-50">
        
        {/* Mobile Dropdown View */}
        <div className="block md:hidden relative px-4 max-w-sm mx-auto">
          <div className="flex items-center gap-2 mb-2 ml-2">
            <span className="text-[10px] text-white/50 font-mono tracking-widest uppercase">Filter by discipline</span>
            <span className="text-[#ccff00] text-[8px] animate-pulse">✦</span>
          </div>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex justify-between items-center bg-[#050505] border border-[#ccff00]/50 text-[#ccff00] font-syne font-bold uppercase tracking-widest text-xs py-4 px-6 rounded-2xl shadow-[0_0_30px_rgba(204,255,0,0.15)] active:scale-[0.98] transition-all"
          >
            <span className="truncate pr-4">{activeCategory}</span>
            <span className={`transform transition-transform duration-300 text-[10px] ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>

          {/* Custom Dropdown Menu Panel (Absolute Position) */}
          <div className={`absolute left-4 right-4 top-[calc(100%+12px)] bg-neutral-950/90 backdrop-blur-2xl border border-[#ccff00]/20 rounded-2xl overflow-hidden transition-all duration-300 origin-top shadow-2xl ${
            isDropdownOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
          }`}>
            <div className="max-h-[50vh] overflow-y-auto scrollbar-hide flex flex-col" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat)
                    setIsDropdownOpen(false)
                  }}
                  className={`w-full text-left px-6 py-4 font-syne font-bold uppercase tracking-wider text-xs transition-colors border-b border-white/5 last:border-b-0
                  ${activeCategory === cat 
                    ? "bg-[#ccff00]/20 text-[#ccff00]" 
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Pills View */}
        <div className="hidden md:flex flex-wrap gap-4 justify-center w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-syne font-bold uppercase tracking-wider text-sm transition-all duration-300 whitespace-nowrap snap-center border-2 
              ${activeCategory === cat 
                ? "bg-[#ccff00] text-black border-[#ccff00] shadow-[0_0_20px_rgba(204,255,0,0.4)]" 
                : "bg-transparent text-slate-400 border-neutral-800 hover:border-slate-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Crazy Swipe Gallery Area */}
      {filteredWorks.length > 0 ? (
        <div className="relative w-full max-w-sm md:max-w-md h-[560px] md:h-[660px] mx-auto perspective-[2000px] mb-32 flex items-center justify-center touch-none">
          
          <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer pointer-events-none z-30 opacity-80 mix-blend-difference">
             <div className="text-[#ccff00] font-syne font-bold uppercase tracking-widest text-sm animate-pulse flex items-center gap-3 bg-black/50 px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
                <span>←</span>
                <span>Swipe to Explore</span>
                <span>→</span>
             </div>
          </div>

          {[...filteredWorks].reverse().map((item, indexReverse) => {
            const actualIndex = filteredWorks.length - 1 - indexReverse
            let relativeIndex = (actualIndex - currentIndex + filteredWorks.length) % filteredWorks.length
            
            if (relativeIndex > 3) return null

            const isTop = relativeIndex === 0
            const isDragging = isTop && dragStart !== null
            const isAnimatingOut = isTop && isAnimating && direction !== 0
            
            let transform = ""
            let opacity = 1
            let zIndex = 20 - relativeIndex

            if (isAnimatingOut) {
              const rotateAmt = direction * (15 + Math.random() * 30)
              const translateAmtX = direction * (150 + Math.random() * 50)
              const translateAmtY = -20 + Math.random() * 40
              transform = `translate3d(${translateAmtX}%, ${translateAmtY}%, 0) rotate(${rotateAmt}deg) scale(0.9)`
              opacity = 0
            } else if (isDragging) {
              // Apply manual drag transform
              const rotateAmt = dragOffset * 0.05
              transform = `translate3d(${dragOffset}px, 0, 0) rotate(${rotateAmt}deg)`
              opacity = 1
            } else {
              // Idle stack state
              const randomRot = relativeIndex === 0 ? 0 : (actualIndex % 2 === 0 ? 1 : -1) * (relativeIndex * 5)
              transform = `translateY(${relativeIndex * 15}px) scale(${1 - relativeIndex * 0.05}) rotate(${randomRot}deg)`
              opacity = 1 - (relativeIndex * 0.2)
            }

            // Remove transition duration if dragging to stick to finger cleanly
            const transitionDuration = isDragging ? "duration-0" : "duration-[400ms]"

            return (
              <div
                key={`${item.id}-${currentIndex}`} 
                onPointerDown={isTop ? onPointerDown : undefined}
                onPointerMove={isTop ? onPointerMove : undefined}
                onPointerUp={isTop ? onPointerUp : undefined}
                onPointerCancel={isTop ? onPointerUp : undefined}
                className={`absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-neutral-800 shadow-2xl transition-all ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${transitionDuration} ${
                  isTop ? "cursor-grab active:cursor-grabbing hover:border-[#ccff00] hover:shadow-[0_0_40px_rgba(204,255,0,0.3)] select-none touch-none" : "pointer-events-none"
                }`}
                style={{
                  transform,
                  opacity,
                  zIndex,
                  transformOrigin: "bottom center"
                }}
              >
                <div className="w-full h-full overflow-hidden rounded-[calc(1rem-2px)] md:rounded-[calc(1.5rem-2px)] bg-neutral-900 relative select-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    draggable={false}
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />

                  <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6 pointer-events-none">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <p className="text-[#ccff00] font-mono text-[10px] md:text-xs uppercase tracking-widest">{item.category}</p>
                      <span className="shrink-0 text-white/60 font-mono text-xs border border-white/20 rounded-full px-3 py-1 bg-black/40 backdrop-blur-sm">
                        #{actualIndex + 1}
                      </span>
                    </div>

                    <h3 className="font-syne text-xl md:text-2xl font-bold text-white uppercase leading-tight">{item.title}</h3>

                    {(item.org || item.period) && (
                      <p className="font-mono text-[10px] md:text-[11px] text-white/45 uppercase tracking-widest mt-1.5 leading-relaxed">
                        {item.org}
                        {item.org && item.period ? " · " : ""}
                        {item.period}
                      </p>
                    )}

                    {item.description && (
                      <p className="text-slate-300 text-[11px] md:text-xs leading-relaxed mt-3 line-clamp-4">
                        {item.description}
                      </p>
                    )}

                    {item.result && (
                      <p className="text-[#ccff00]/90 text-[11px] md:text-xs leading-relaxed mt-3 font-medium line-clamp-3">
                        <span className="mr-1.5">▸</span>{item.result}
                      </p>
                    )}

                    {item.tools && item.tools.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3.5">
                        {item.tools.slice(0, 5).map((tool) => (
                          <span
                            key={tool}
                            className="font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-white/70 border border-white/15 bg-white/[0.04] rounded-full px-2.5 py-1 backdrop-blur-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"}}></div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-64 w-full border-2 border-dashed border-neutral-800 rounded-3xl mb-32">
          <p className="text-slate-500 font-mono uppercase tracking-widest text-sm">More projects in progress ✦</p>
        </div>
      )}
    </div>
  )
}