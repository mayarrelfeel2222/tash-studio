// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { DndProvider } from "react-dnd"
// import { HTML5Backend } from "react-dnd-html5-backend"
// import { TouchBackend } from "react-dnd-touch-backend"
// import { usePreview } from "react-dnd-preview"
// import EarCanvas from "./ear-canvas"
// import EarringSelector from "./earring-selector"
// import StudioHeader from "./studio-header"
// import { useMobile } from "@/hooks/use-mobile"

// // Sample earring data with real online images and available colors
// // Each earring has an image object where keys are color names
// // and values are the image URLs for that color.

// const colorHexMap = {
//   gold: "#e8c70c",
//   bronze: "#f3a85d",
//   silver: "#C0C0C0",
// }

// const earrings = [
//   {
//     id: "1",
//     name: "Gold Hoop Earring",
//     price: "$80",
//     category: "hoops",
//     image: {
//       gold: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/x/e/xetd-rg-d65_1.png?_i=AB",
//       bronze:"https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/x/e/xetd-wg-d8_1.png?_i=AB",
//       silver:"https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/d/i/diamond-eternity-hoop-earring-black-gold-5mm-5mm-black-gold-xetd-bg-d5-a.png?_i=AB",
//     },
//   },
//   {
//     id: "2",
//     name: "Diamond Stud",
//     price: "$120",
//     category: "studs",
//     image: {
//       gold: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/j/c/jchpmpefd-wg-w6w35_1_1.png?_i=AB",
//       silver:
//         "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/j/c/jchpmpefd-wg-w6w35_1_1.png?_i=AB",
//     },
//   },
//   {
//     id: "3",
//     name: "Pearl Drop Earring",
//     price: "$95",
//     category: "drops",
//     image: {
//       gold: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/j/c/jchpmpefd-wg-w6w35_1_1.png?_i=AB",
//       silver: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/j/c/jchpmpefd-wg-w6w35_1_1.png?_i=AB",
//     },
//   },
//   {
//     id: "4",
//     name: "Silver Hoop",
//     price: "$65",
//     category: "hoops",
//     image: {
//       silver: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,h_345,q_auto,w_345/v1/media/catalog/product/x/e/xet2dd-wg-d8_1_1.png?_i=AB",
//     },
//   },
// ]

// // Preview component for mobile drag and drop
// const DragPreview = () => {
//   const { display, item, style } = usePreview()
//   if (!display) return null

//   // Get the first color as default if no specific color is selected
//   const defaultColor = Object.keys(item.image || {})[0]

//   return (
//     <div className="fixed z-50 pointer-events-none" style={style}>
//       <Image
//         // When dragging, show the image corresponding to the selected color
//         src={item.image?.[defaultColor] || "/placeholder.svg"}
//         alt={item.name || "Earring"}
//         width={60}
//         height={60}
//         className="opacity-70"
//         unoptimized
//       />
//     </div>
//   )
// }

// export default function EarringStudio() {
//   const [placedEarrings, setPlacedEarrings] = useState([])
//   const [selectedCategory, setSelectedCategory] = useState("all")
//   const [view, setView] = useState("front")
//   const [selectedEarringId, setSelectedEarringId] = useState(null)
//   const isMobile = useMobile()

//   // Clear placed earrings when changing view
//   useEffect(() => {
//     setPlacedEarrings([])
//     setSelectedEarringId(null)
//   }, [view])

//   // Filter earrings by category
//   const filteredEarrings =
//     selectedCategory === "all" ? earrings : earrings.filter((earring) => earring.category === selectedCategory)

//   // Handle dropping an earring on the ear
//   const handleDrop = (earring, x, y) => {
//     const id = `placed-${Date.now()}`
//     // Get the first available color key from image object (as default)
//     const defaultColor = Object.keys(earring.image)[0]
//     setPlacedEarrings([...placedEarrings, { id, x, y, earring, color: defaultColor }])
//   }

//   // Remove an earring from the ear
//   const handleRemove = (id) => {
//     setPlacedEarrings(placedEarrings.filter((item) => item.id !== id))
//     if (selectedEarringId === id) setSelectedEarringId(null)
//   }

//   // Clear all earrings
//   const handleClearAll = () => {
//     setPlacedEarrings([])
//     setSelectedEarringId(null)
//   }

//   // Toggle between front and side view
//   const toggleView = () => {
//     setView(view === "front" ? "side" : "front")
//   }

//   // Select an earring for editing
//   const handleSelectEarring = (id) => {
//     setSelectedEarringId(id === selectedEarringId ? null : id)
//   }

//   // Change earring color
//   const handleChangeColor = (id, color) => {
//     setPlacedEarrings(placedEarrings.map((item) => (item.id === id ? { ...item, color } : item)))
//   }

//   // Get the selected earring
//   const selectedEarring = placedEarrings.find((item) => item.id === selectedEarringId)

//   return (
//     <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
//       <div className="flex flex-col min-h-screen bg-white">
//         <StudioHeader />

//         <div className="flex flex-col md:flex-row flex-1">
//           {/* Left side - Ear canvas */}
//           <div className="w-full md:w-2/3 p-4 flex flex-col items-center justify-center bg-gray-50">
//             <div className="mb-4 flex gap-4">
//               <button
//                 onClick={toggleView}
//                 className={`px-4 py-2 rounded-full ${view === "front" ? "bg-black text-white" : "bg-gray-200"}`}
//               >
//                 Front View
//               </button>
//               <button
//                 onClick={toggleView}
//                 className={`px-4 py-2 rounded-full ${view === "side" ? "bg-black text-white" : "bg-gray-200"}`}
//               >
//                 Side View
//               </button>
//               <button onClick={handleClearAll} className="px-4 py-2 rounded-full bg-red-500 text-white">
//                 Clear All
//               </button>
//             </div>

//             <EarCanvas
//               view={view}
//               placedEarrings={placedEarrings}
//               onDrop={handleDrop}
//               onRemove={handleRemove}
//               onSelect={handleSelectEarring}
//               selectedEarringId={selectedEarringId}
//             />

//             {/* Color selector for selected earring */}
//             {selectedEarring && (
//               <div className="mt-4 p-4 border rounded-lg bg-white">
//                 <h3 className="text-sm font-medium mb-2">Select Color for {selectedEarring.earring.name}</h3>
//                 <div className="flex gap-2">
//                   {Object.keys(selectedEarring.earring.image).map((color) => (
//                     <button
//                       key={color}
//                       onClick={() => handleChangeColor(selectedEarring.id, color)}
//                       className={`w-8 h-8 rounded-full border-2 ${
//                         selectedEarring.color === color ? "border-black" : "border-transparent"
//                       }`}
//                       style={{ backgroundColor: colorHexMap[color] || color }}
//                       aria-label={`Select ${color} color`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}

//             <div className="mt-4 text-center text-gray-500">
//               Drag and drop earrings onto the ear. Click an earring to change its color.
//             </div>
//           </div>

//           {/* Right side - Earring selector */}
//           <div className="w-full md:w-1/3 p-4 bg-white border-l">
//             <EarringSelector
//               earrings={filteredEarrings}
//               selectedCategory={selectedCategory}
//               onSelectCategory={setSelectedCategory}
//             />
//           </div>
//         </div>
//       </div>

//       {isMobile && <DragPreview />}
//     </DndProvider>
//   )
// }


/////////////////////////////////

// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { DndProvider } from "react-dnd"
// import { HTML5Backend } from "react-dnd-html5-backend"
// import { TouchBackend } from "react-dnd-touch-backend"
// import { usePreview } from "react-dnd-preview"
// import EarCanvas from "./ear-canvas"
// import EarringSelector from "./earring-selector"
// import StudioHeader from "./studio-header"
// import { useMobile } from "@/hooks/use-mobile"

// // Sample earring data with real online images and available colors
// // Each earring has an image object where keys are color names
// // and values are the image URLs for that color.

// const colorHexMap = {
//   gold: "#e8c70c",
//   bronze: "#f3a85d",
//   silver: "#C0C0C0",
// }

// const earrings = [
//   {
//     id: "1",
//     name: "Gold Hoop Earring",
//     price: "$80",
//     category: "hoops",
//     image: {
//       gold: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/x/e/xetd-rg-d65_1.png?_i=AB",
//       bronze:
//         "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/x/e/xetd-wg-d8_1.png?_i=AB",
//       silver:
//         "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/d/i/diamond-eternity-hoop-earring-black-gold-5mm-5mm-black-gold-xetd-bg-d5-a.png?_i=AB",
//     },
//   },
//   {
//     id: "2",
//     name: "Diamond Stud",
//     price: "$120",
//     category: "studs",
//     image: {
//       gold: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/j/c/jchpmpefd-wg-w6w35_1_1.png?_i=AB",
//       silver:
//         "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/j/c/jchpmpefd-wg-w6w35_1_1.png?_i=AB",
//     },
//   },
//   {
//     id: "3",
//     name: "Pearl Drop Earring",
//     price: "$95",
//     category: "drops",
//     image: {
//       gold: "https://i.postimg.cc/8PkwdTYd/image.png",
//       bronze: "https://i.postimg.cc/4dBHXR1Z/image.png",
//       silver: "https://i.postimg.cc/DfRL0nTy/image.png",
//     },
//   },
//   {
//     id: "4",
//     name: "Silver Hoop",
//     price: "$65",
//     category: "hoops",
//     image: {
//       gold: "https://i.postimg.cc/8PkwdTYd/image.png",
//       bronze: "https://i.postimg.cc/4dBHXR1Z/image.png",
//       silver: "https://i.postimg.cc/DfRL0nTy/image.png",
//     },
//   },
// ]

// // Preview component for mobile drag and drop
// const DragPreview = () => {
//   const { display, item, style } = usePreview()
//   if (!display) return null

//   // Get the first color as default if no specific color is selected
//   const defaultColor = Object.keys(item.image || {})[0]

//   return (
//     <div className="fixed z-50 pointer-events-none" style={style}>
//       <Image
//         // When dragging, show the image corresponding to the selected color
//         src={item.image?.[defaultColor] || "/placeholder.svg"}
//         alt={item.name || "Earring"}
//         width={60}
//         height={60}
//         className="opacity-70"
//         unoptimized
//       />
//     </div>
//   )
// }

// export default function EarringStudio() {
//   const [placedEarrings, setPlacedEarrings] = useState([])
//   const [selectedCategory, setSelectedCategory] = useState("all")
//   const [view, setView] = useState("front") // Default to front view for the new image
//   const [selectedEarringId, setSelectedEarringId] = useState(null)
//   const [currentEarSide, setCurrentEarSide] = useState("right") // State for ear side
//   const isMobile = useMobile()

//   // Clear placed earrings when changing view
//   useEffect(() => {
//     setPlacedEarrings([])
//     setSelectedEarringId(null)
//   }, [view])

//   // Filter earrings by category
//   const filteredEarrings =
//     selectedCategory === "all" ? earrings : earrings.filter((earring) => earring.category === selectedCategory)

//   // Handle dropping an earring on the ear
//   const handleDrop = (earring, x, y, earSide, piercingLocation = null) => {
//     console.log("Dropping earring:", earring, "at position:", x, y, "on ear side:", earSide)
//     const id = `placed-${Date.now()}`
//     // Get the first available color key from image object (as default)
//     const defaultColor = Object.keys(earring.image)[0]

//     // Add the new earring to the placed earrings array
//     setPlacedEarrings([
//       ...placedEarrings,
//       {
//         id,
//         x,
//         y,
//         earring,
//         color: defaultColor,
//         earSide: earSide || currentEarSide, // Use provided earSide or fallback to currentEarSide
//         piercingLocation,
//         highlighted: true,
//       },
//     ])

//     // Select the newly placed earring
//     setSelectedEarringId(id)
//   }

//   // Remove an earring from the ear
//   const handleRemove = (id) => {
//     setPlacedEarrings(placedEarrings.filter((item) => item.id !== id))
//     if (selectedEarringId === id) setSelectedEarringId(null)
//   }

//   // Clear all earrings
//   const handleClearAll = () => {
//     setPlacedEarrings([])
//     setSelectedEarringId(null)
//   }

//   // Toggle between front and side view
//   const toggleView = () => {
//     setView(view === "front" ? "side" : "front")
//   }

//   // Select an earring for editing
//   const handleSelectEarring = (id) => {
//     setSelectedEarringId(id === selectedEarringId ? null : id)
//   }

//   // Change earring color
//   const handleChangeColor = (id, color) => {
//     setPlacedEarrings(placedEarrings.map((item) => (item.id === id ? { ...item, color } : item)))
//   }

//   // Handle ear side change
//   const handleEarSideChange = (side) => {
//     console.log("Changing ear side to:", side)
//     setCurrentEarSide(side)
//   }

//   // Get the selected earring
//   const selectedEarring = placedEarrings.find((item) => item.id === selectedEarringId)

//   return (
//     <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
//       <div className="flex flex-col min-h-screen bg-white">
//         <StudioHeader />

//         <div className="flex flex-col md:flex-row flex-1">
//           {/* Left side - Ear canvas */}
//           <div className="w-full md:w-2/3 p-4 flex flex-col items-center justify-center bg-gray-50">
//             <div className="mb-4 flex gap-4">
//               <button
//                 onClick={toggleView}
//                 className={`px-4 py-2 rounded-full ${view === "front" ? "bg-black text-white" : "bg-gray-200"}`}
//               >
//                 Front View
//               </button>
//               <button
//                 onClick={toggleView}
//                 className={`px-4 py-2 rounded-full ${view === "side" ? "bg-black text-white" : "bg-gray-200"}`}
//               >
//                 Side View
//               </button>
//               <button onClick={handleClearAll} className="px-4 py-2 rounded-full bg-red-500 text-white">
//                 Clear All
//               </button>
//             </div>

//             <EarCanvas
//               view={view}
//               placedEarrings={placedEarrings}
//               onDrop={handleDrop}
//               onRemove={handleRemove}
//               onSelect={handleSelectEarring}
//               selectedEarringId={selectedEarringId}
//               earSide={currentEarSide}
//               onEarSideChange={handleEarSideChange}
//             />

//             {/* Color selector for selected earring */}
//             {selectedEarring && (
//               <div className="mt-4 p-4 border rounded-lg bg-white">
//                 <h3 className="text-sm font-medium mb-2">
//                   {selectedEarring.piercingLocation
//                     ? `${selectedEarring.earring.name} on ${selectedEarring.piercingLocation}`
//                     : `${selectedEarring.earring.name}`}
//                 </h3>
//                 <div className="flex gap-2">
//                   {Object.keys(selectedEarring.earring.image).map((color) => (
//                     <button
//                       key={color}
//                       onClick={() => handleChangeColor(selectedEarring.id, color)}
//                       className={`w-8 h-8 rounded-full border-2 ${
//                         selectedEarring.color === color ? "border-black" : "border-transparent"
//                       }`}
//                       style={{ backgroundColor: colorHexMap[color] || color }}
//                       aria-label={`Select ${color} color`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}

//             <div className="mt-4 text-center text-gray-500">
//               Drag earrings onto the ear to see available piercing locations.
//             </div>
//           </div>

//           {/* Right side - Earring selector */}
//           <div className="w-full md:w-1/3 p-4 bg-white border-l">
//             <EarringSelector
//               earrings={filteredEarrings}
//               selectedCategory={selectedCategory}
//               onSelectCategory={setSelectedCategory}
//             />
//           </div>
//         </div>
//       </div>

//       {isMobile && <DragPreview />}
//     </DndProvider>
//   )
// }

////////////////////


"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { TouchBackend } from "react-dnd-touch-backend"
import { usePreview } from "react-dnd-preview"
import EarCanvas from "./ear-canvas"
import EarringSelector from "./earring-selector"
import StudioHeader from "./studio-header"
import { useMobile } from "@/hooks/use-mobile"

// Sample earring data with real online images and available colors
// Each earring has an image object where keys are color names
// and values are the image URLs for that color.

const colorHexMap = {
  gold: "#e8c70c",
  bronze: "#f3a85d",
  silver: "#C0C0C0",
}

// const earrings = [
//   {
//     id: "1",
//     name: "Diamond Eternity Hoop",
//     price: "$80",
//     category: "hoops",
//     image: {
//       gold: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/x/e/xetd-rg-d65_1.png?_i=AB",
//       bronze:
//         "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/x/e/xetd-wg-d8_1.png?_i=AB",
//       silver:
//         "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/d/i/diamond-eternity-hoop-earring-black-gold-5mm-5mm-black-gold-xetd-bg-d5-a.png?_i=AB",
//     },
//   },
//   {
//     id: "2",
//     name: "Diamond Stud",
//     price: "$120",
//     category: "studs",
//     image: {
//       gold: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/j/c/jchpmpefd-wg-w6w35_1_1.png?_i=AB",
//       silver:
//         "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/j/c/jchpmpefd-wg-w6w35_1_1.png?_i=AB",
//     },
//   },
//   {
//     id: "3",
//     name: "Pear Floating Diamond",
//     price: "$95",
//     category: "drops",
//     image: {
//       gold: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/p/e/pear-floating-diamond-charm-earring-rose-gold-4mm-4mm-rose-gold-pfdc-rg-d4-a.png?_i=AB",
//       silver:
//         "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/p/e/pear-floating-diamond-charm-earring-white-gold-4mm-4mm-white-gold-pfdc-wg-d4-a.png?_i=AB",
//     },
//   },
//   {
//     id: "4",
//     name: "Mini Diamond Stud",
//     price: "$65",
//     category: "studs",
//     image: {
//       gold: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/i/n/invisible-set-diamond-stud-earring-rose-gold-2mm-2mm-rose-gold-isds-rg-d2-a.png?_i=AB",
//       silver:
//         "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/i/n/invisible-set-diamond-stud-earring-white-gold-2mm-2mm-white-gold-isds-wg-d2-a.png?_i=AB",
//     },
//   },
// ]








////////////////////////////



const earrings = [
  {
    id: "1",
    name: "Gold Hoop Earring",
    price: "$80",
    category: "hoops",
    image: {
      gold: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/x/e/xetd-rg-d65_1.png?_i=AB",
      bronze:"https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/x/e/xetd-wg-d8_1.png?_i=AB",
      silver:"https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/d/i/diamond-eternity-hoop-earring-black-gold-5mm-5mm-black-gold-xetd-bg-d5-a.png?_i=AB",
    },
  },
  {
    id: "2",
    name: "Diamond Stud",
    price: "$120",
    category: "studs",
    image: {
      gold: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/j/c/jchpmpefd-wg-w6w35_1_1.png?_i=AB",
      silver:
        "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/j/c/jchpmpefd-wg-w6w35_1_1.png?_i=AB",
    },
  },
  {
    id: "3",
    name: "Pearl Drop Earring",
    price: "$95",
    category: "drops",
    image: {
      gold: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/j/c/jchpmpefd-wg-w6w35_1_1.png?_i=AB",
      silver: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,q_auto/v1/media/catalog/product/j/c/jchpmpefd-wg-w6w35_1_1.png?_i=AB",
    },
  },
  {
    id: "4",
    name: "Silver Hoop",
    price: "$65",
    category: "hoops",
    image: {
      silver: "https://cdn.mariatash.com/image/upload/c_lpad,dpr_1.0,f_auto,h_345,q_auto,w_345/v1/media/catalog/product/x/e/xet2dd-wg-d8_1_1.png?_i=AB",
    },
  },
]
// Preview component for mobile drag and drop


const DragPreview = () => {
  const { display, item, style } = usePreview()
  if (!display) return null

  // Get the first color as default if no specific color is selected
  const defaultColor = Object.keys(item.image || {})[0]

  return (
    <div className="fixed z-50 pointer-events-none" style={style}>
      <Image
        // When dragging, show the image corresponding to the selected color
        src={item.image?.[defaultColor] || "/placeholder.svg"}
        alt={item.name || "Earring"}
        width={60}
        height={60}
        className="opacity-70"
        unoptimized
      />
    </div>
  )
}

export default function EarringStudio() {
  const [placedEarrings, setPlacedEarrings] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const view = "side" // Always use side view with our new ear image
  const [selectedEarringId, setSelectedEarringId] = useState(null)
  const [currentEarSide, setCurrentEarSide] = useState("right") // State for ear side
  const isMobile = useMobile()

  // Clear placed earrings when component mounts
  useEffect(() => {
    setPlacedEarrings([])
    setSelectedEarringId(null)
  }, [])

  // Filter earrings by category
  const filteredEarrings =
    selectedCategory === "all" ? earrings : earrings.filter((earring) => earring.category === selectedCategory)

  // Handle dropping an earring on the ear
  const handleDrop = (earring, x, y, earSide, piercingLocation = null) => {
    console.log("Dropping earring:", earring, "at position:", x, y, "on ear side:", earSide)
    const id = `placed-${Date.now()}`
    // Get the first available color key from image object (as default)
    const defaultColor = Object.keys(earring.image)[0]

    // Add the new earring to the placed earrings array
    setPlacedEarrings([
      ...placedEarrings,
      {
        id,
        x,
        y,
        earring,
        color: defaultColor,
        earSide: earSide || currentEarSide, // Use provided earSide or fallback to currentEarSide
        piercingLocation,
        highlighted: true,
      },
    ])

    // Select the newly placed earring
    setSelectedEarringId(id)
  }

  // Remove an earring from the ear
  const handleRemove = (id) => {
    setPlacedEarrings(placedEarrings.filter((item) => item.id !== id))
    if (selectedEarringId === id) setSelectedEarringId(null)
  }

  // Clear all earrings
  const handleClearAll = () => {
    setPlacedEarrings([])
    setSelectedEarringId(null)
  }

  // Change earring color
  const handleChangeColor = (id, color) => {
    setPlacedEarrings(placedEarrings.map((item) => (item.id === id ? { ...item, color } : item)))
  }

  // Handle ear side change
  const handleEarSideChange = (side) => {
    console.log("Changing ear side to:", side)
    setCurrentEarSide(side)
  }

  // Handle selecting an earring on the ear
  const handleSelectEarring = (id) => {
    setSelectedEarringId(id)
  }

  // Get the selected earring
  const selectedEarring = placedEarrings.find((item) => item.id === selectedEarringId)

  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <div className="flex flex-col min-h-screen bg-white">
        <StudioHeader />

        <div className="flex flex-col md:flex-row flex-1">
          {/* Left side - Ear canvas */}
          <div className="w-full md:w-2/3 p-4 flex flex-col items-center justify-center bg-gray-50">
            <div className="mb-4 flex gap-4">
              <button onClick={handleClearAll} className="px-4 py-2 rounded-full bg-red-500 text-white">
                Clear All
              </button>
            </div>

            <EarCanvas
              view={view}
              placedEarrings={placedEarrings}
              onDrop={handleDrop}
              onRemove={handleRemove}
              onSelect={handleSelectEarring}
              selectedEarringId={selectedEarringId}
              earSide={currentEarSide}
              onEarSideChange={handleEarSideChange}
            />

            {/* Color selector for selected earring */}
            {selectedEarring && (
              <div className="mt-4 p-4 border rounded-lg bg-white">
                <h3 className="text-sm font-medium mb-2">
                  {selectedEarring.piercingLocation
                    ? `${selectedEarring.earring.name} on ${selectedEarring.piercingLocation}`
                    : `${selectedEarring.earring.name}`}
                </h3>
                <div className="flex gap-2">
                  {Object.keys(selectedEarring.earring.image).map((color) => (
                    <button
                      key={color}
                      onClick={() => handleChangeColor(selectedEarring.id, color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedEarring.color === color ? "border-black" : "border-transparent"
                      }`}
                      style={{ backgroundColor: colorHexMap[color] || color }}
                      aria-label={`Select ${color} color`}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4 text-center text-gray-500">
              Drag earrings onto the ear to see available piercing locations.
            </div>
          </div>

          {/* Right side - Earring selector */}
          <div className="w-full md:w-1/3 p-4 bg-white border-l">
            <EarringSelector
              earrings={filteredEarrings}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>
      </div>

      {isMobile && <DragPreview />}
    </DndProvider>
  )
}

