// Alternative Hero Section Designs
// Copy one of these into HeroSection.tsx to try different styles

// Option 1: Minimal Typography Focus
export const HeroOption1 = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-12"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                <span className="block text-gray-300">Alex</span>
                <span className="block bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  Thompson
                </span>
              </h1>
              <div className="absolute -top-4 -right-4 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Full-Stack Developer crafting digital experiences with{' '}
              <span className="text-primary-600 font-medium">React & Next.js</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              View Projects
            </button>
            <button className="px-8 py-3 border border-primary-200 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors">
              Download CV
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Option 2: Card-based Layout
export const HeroOption2 = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Available for hire
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Hey, I'm{' '}
                  <span className="text-primary-600">Alex</span>
                  <br />
                  Full-Stack Developer
                </h1>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  I build modern web applications that users love. 
                  Specialized in React, Next.js, and Node.js with 5+ years of experience.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Let's work together
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    View my work
                  </button>
                </div>
              </motion.div>
            </div>
            
            {/* Visual Side */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-8 md:p-12 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">AT</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Option 3: Split Screen Design
export const HeroOption3 = () => {
  return (
    <section className="relative min-h-screen grid md:grid-cols-2">
      {/* Left side - Content */}
      <div className="flex items-center justify-center px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
              <span className="text-primary-600 font-medium">Available for work</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Create.</span>
              <span className="block">Build.</span>
              <span className="block text-primary-600">Deploy.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              I'm Alex, a full-stack developer passionate about creating 
              exceptional digital experiences.
            </p>
          </div>
          
          <div className="space-y-4">
            <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Start a project
            </button>
            <button className="w-full px-6 py-3 border border-primary-200 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors">
              See my work
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Right side - Visual */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative z-10"
        >
          <div className="grid grid-cols-3 gap-4 p-8">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                className="w-16 h-16 bg-white/10 rounded-lg backdrop-blur-sm"
              />
            ))}
          </div>
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-primary-800/50 to-transparent"></div>
      </div>
    </section>
  )
}
