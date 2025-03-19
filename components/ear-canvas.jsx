// "use client"

// import { useRef, useState } from "react"
// import { useDrop } from "react-dnd"
// import Image from "next/image"

// // These would be replaced with actual different ear images
// const earImages = {
//   female: {
//     light: {
//       front: {
//         left: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//         right: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg", // Would be mirrored version
//       },
//       side: {
//         left: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//         right: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg", // Would be different angle
//       },
//     },
//     medium: {
//       front: {
//         left: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//         right: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//       },
//       side: {
//         left: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//         right: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//       },
//     },
//     dark: {
//       front: {
//         left: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//         right: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//       },
//       side: {
//         left: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//         right: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//       },
//     },
//   },
//   male: {
//     light: {
//       front: {
//         left: "https://media.istockphoto.com/id/1183585499/photo/female-face-in-profile.jpg?s=612x612&w=0&k=20&c=L5DzfsAOj7j8rFgh3_sufwv_CZp6WSpxVJLL10hQliA=",
//         right: "https://media.istockphoto.com/id/1183585499/photo/female-face-in-profile.jpg?s=612x612&w=0&k=20&c=L5DzfsAOj7j8rFgh3_sufwv_CZp6WSpxVJLL10hQliA=",
//       },
//       side: {
//         left: "https://media.istockphoto.com/id/1183585499/photo/female-face-in-profile.jpg?s=612x612&w=0&k=20&c=L5DzfsAOj7j8rFgh3_sufwv_CZp6WSpxVJLL10hQliA=",
//         right: "https://media.istockphoto.com/id/1183585499/photo/female-face-in-profile.jpg?s=612x612&w=0&k=20&c=L5DzfsAOj7j8rFgh3_sufwv_CZp6WSpxVJLL10hQliA=",
//       },
//     },
//     medium: {
//       front: {
//         left: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//         right: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//       },
//       side: {
//         left: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//         right: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//       },
//     },
//     dark: {
//       front: {
//         left: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//         right: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//       },
//       side: {
//         left: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//         right: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-nW8YUHBBBleqUPhkVPXHbNN8TVH0pD.jpeg",
//       },
//     },
//   },
// }

// // Skin color options with display names and CSS color values
// const skinColorOptions = [
//   { id: "light", name: "Light", color: "#F5D0B9" },
//   { id: "medium", name: "Medium", color: "#C68642" },
//   { id: "dark", name: "Dark", color: "#6B4423" },
// ]

// export default function EarCanvas({ view, placedEarrings, onDrop, onRemove, onSelect, selectedEarringId }) {
//   const canvasRef = useRef(null)
//   const [gender, setGender] = useState("female")
//   const [skinColor, setSkinColor] = useState("light")
//   const [earSide, setEarSide] = useState("left")

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "earring",
//     drop: (item, monitor) => {
//       const canvasRect = canvasRef.current?.getBoundingClientRect()
//       if (canvasRect) {
//         const clientOffset = monitor.getClientOffset()
//         if (clientOffset) {
//           const x = clientOffset.x - canvasRect.left
//           const y = clientOffset.y - canvasRect.top
//           onDrop(item, x, y)
//         }
//       }
//       return undefined
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }))

//   // Get ear image based on all selections
//   const earImage = earImages[gender][skinColor][view][earSide]

//   // Apply a CSS filter to simulate different skin tones
//   // This is a fallback approach if we don't have actual different images
//   const getSkinToneFilter = () => {
//     switch (skinColor) {
//       case "light":
//         return "none"
//       case "medium":
//         return "sepia(0.4) brightness(0.9)"
//       case "dark":
//         return "sepia(0.8) brightness(0.6)"
//       default:
//         return "none"
//     }
//   }

//   // Apply a transform to flip the image for right ear
//   const getEarTransform = () => {
//     return earSide === "right" ? "scaleX(-1)" : "none"
//   }

//   return (
//     <div className="flex flex-col items-center gap-4">
//       {/* Controls for gender, skin color, and ear side */}
//       <div className="flex flex-wrap gap-4 justify-center w-full mb-2">

//         <div className="flex items-center gap-2">
//           <span className="text-sm font-medium">Skin:</span>
//           <div className="flex rounded-md overflow-hidden">
//             {skinColorOptions.map((option) => (
//               <button
//                 key={option.id}
//                 onClick={() => setSkinColor(option.id)}
//                 className={`px-3 py-1 text-sm flex items-center gap-1 ${
//                   skinColor === option.id ? "bg-black text-white" : "bg-gray-200"
//                 }`}
//               >
//                 <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: option.color }}></span>
//                 {option.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="flex items-center gap-2">
//           <span className="text-sm font-medium">Ear:</span>
//           <div className="flex rounded-md overflow-hidden">
//             <button
//               onClick={() => setEarSide("left")}
//               className={`px-3 py-1 text-sm ${earSide === "left" ? "bg-black text-white" : "bg-gray-200"}`}
//             >
//               Left
//             </button>
//             <button
//               onClick={() => setEarSide("right")}
//               className={`px-3 py-1 text-sm ${earSide === "right" ? "bg-black text-white" : "bg-gray-200"}`}
//             >
//               Right
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Ear canvas with drop zone */}
//       <div
//         ref={(node) => {
//           drop(node)
//           canvasRef.current = node
//         }}
//         className={`relative w-full max-w-md h-[500px] border rounded-lg ${isOver ? "bg-gray-100" : "bg-white"}`}
//       >
//         {/* Ear image based on selections */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Image
//             src={earImage || "/placeholder.svg"}
//             alt={`${gender} ${skinColor} ${view} ${earSide} ear`}
//             width={view === "front" ? 300 : 200}
//             height={500}
//             className="object-contain"
//             style={{
//               filter: getSkinToneFilter(),
//               transform: getEarTransform(),
//             }}
//             priority
//             unoptimized
//           />
//         </div>

//         {/* Placed earrings */}
//         {placedEarrings.map((item) => (
//           <div
//             key={item.id}
//             className={`absolute cursor-pointer transition-all ${selectedEarringId === item.id ? "ring-2 ring-black rounded-full" : ""}`}
//             style={{
//               left: `${item.x - 25}px`,
//               top: `${item.y - 25}px`,
//               // Mirror the position for right ear
//               transform: earSide === "right" ? "scaleX(-1)" : "none",
//             }}
//             onClick={() => onSelect(item.id)}
//             onDoubleClick={() => onRemove(item.id)}
//           >
//             <div className="relative w-12 h-12">
//               <Image
//                 src={item.earring.image[item.color] || "/placeholder.svg"}
//                 alt={item.earring.name}
//                 fill
//                 className="object-contain"
//                 // Mirror the earring for right ear
//                 style={{ transform: earSide === "right" ? "scaleX(-1)" : "none" }}
//                 unoptimized
//               />
//             </div>
//           </div>
//         ))}

//         <div className="absolute bottom-2 right-2 text-xs text-gray-400">
//           Click to select an earring, double-click to remove
//         </div>
//       </div>
//     </div>
//   )
// }





































// /////////////////////////////////////////////

// "use client"

// import { useRef, useState, useEffect } from "react"
// import { useDrop } from "react-dnd"
// import Image from "next/image"

// // Skin color options with display names and CSS color values
// const skinColorOptions = [
//   { id: "light", name: "Light", color: "#F5D0B9" },
//   { id: "medium", name: "Medium", color: "#C68642" },
//   { id: "dark", name: "Dark", color: "#6B4423" },
// ]

// // Define piercing locations for different ear views
// const piercingLocations = {
//   front: {
//     right: [
//       { id: "lobe", name: "Lobe", x: 75, y: 70, width: 20, height: 20 },
//       { id: "helix", name: "Helix", x: 70, y: 30, width: 20, height: 20 },
//       { id: "tragus", name: "Tragus", x: 55, y: 50, width: 15, height: 15 },
//       { id: "conch", name: "Conch", x: 60, y: 45, width: 18, height: 18 },
//       { id: "daith", name: "Daith", x: 55, y: 40, width: 15, height: 15 },
//     ],
//     left: [
//       { id: "lobe", name: "Lobe", x: 25, y: 70, width: 20, height: 20 },
//       { id: "helix", name: "Helix", x: 30, y: 30, width: 20, height: 20 },
//       { id: "tragus", name: "Tragus", x: 45, y: 50, width: 15, height: 15 },
//       { id: "conch", name: "Conch", x: 40, y: 45, width: 18, height: 18 },
//       { id: "daith", name: "Daith", x: 45, y: 40, width: 15, height: 15 },
//     ],
//   },
//   side: {
//     right: [
//       { id: "lobe", name: "Lobe", x: 50, y: 75, width: 20, height: 20 },
//       { id: "helix", name: "Helix", x: 30, y: 25, width: 20, height: 20 },
//       { id: "tragus", name: "Tragus", x: 45, y: 50, width: 15, height: 15 },
//       { id: "conch", name: "Conch", x: 35, y: 45, width: 18, height: 18 },
//       { id: "daith", name: "Daith", x: 40, y: 40, width: 15, height: 15 },
//     ],
//     left: [
//       { id: "lobe", name: "Lobe", x: 50, y: 75, width: 20, height: 20 },
//       { id: "helix", name: "Helix", x: 30, y: 25, width: 20, height: 20 },
//       { id: "tragus", name: "Tragus", x: 45, y: 50, width: 15, height: 15 },
//       { id: "conch", name: "Conch", x: 35, y: 45, width: 18, height: 18 },
//       { id: "daith", name: "Daith", x: 40, y: 40, width: 15, height: 15 },
//     ],
//   },
// }

// export default function EarCanvas({
//   view,
//   placedEarrings,
//   onDrop,
//   onRemove,
//   onSelect,
//   selectedEarringId,
//   earSide,
//   onEarSideChange,
// }) {
//   const canvasRef = useRef(null)
//   const [skinColor, setSkinColor] = useState("light")
//   const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })
//   const [hoveredLocation, setHoveredLocation] = useState(null)
//   const [isDraggingOver, setIsDraggingOver] = useState(false)

//   // Update canvas size on mount and resize
//   useEffect(() => {
//     const updateCanvasSize = () => {
//       if (canvasRef.current) {
//         const { width, height } = canvasRef.current.getBoundingClientRect()
//         setCanvasSize({ width, height })
//       }
//     }

//     updateCanvasSize()
//     window.addEventListener("resize", updateCanvasSize)
//     return () => window.removeEventListener("resize", updateCanvasSize)
//   }, [])

//   const [{ isOver }, drop] = useDrop(
//     () => ({
//       accept: "earring",
//       hover: (item, monitor) => {
//         setIsDraggingOver(true)
//         const canvasRect = canvasRef.current?.getBoundingClientRect()
//         if (canvasRect) {
//           const clientOffset = monitor.getClientOffset()
//           if (clientOffset) {
//             const x = clientOffset.x - canvasRect.left
//             const y = clientOffset.y - canvasRect.top

//             // Calculate percentages
//             const xPercent = (x / canvasRect.width) * 100
//             const yPercent = (y / canvasRect.height) * 100

//             // Find the closest piercing location
//             const locations = piercingLocations[view][earSide]
//             const closestLocation = locations.find((loc) => {
//               return (
//                 xPercent >= loc.x - loc.width / 2 &&
//                 xPercent <= loc.x + loc.width / 2 &&
//                 yPercent >= loc.y - loc.height / 2 &&
//                 yPercent <= loc.y + loc.height / 2
//               )
//             })

//             setHoveredLocation(closestLocation || null)
//           }
//         }
//       },
//       drop: (item, monitor) => {
//         console.log("Drop detected in EarCanvas")
//         setIsDraggingOver(false)
//         if (hoveredLocation) {
//           // If hovering over a valid location, use that location's coordinates
//           const canvasRect = canvasRef.current?.getBoundingClientRect()
//           if (canvasRect) {
//             // Convert percentage to actual pixels
//             const x = (hoveredLocation.x / 100) * canvasRect.width
//             const y = (hoveredLocation.y / 100) * canvasRect.height
//             onDrop(item, x, y, earSide, hoveredLocation.id)
//           }
//         } else {
//           // Otherwise use the drop coordinates
//           const canvasRect = canvasRef.current?.getBoundingClientRect()
//           if (canvasRect) {
//             const clientOffset = monitor.getClientOffset()
//             if (clientOffset) {
//               const x = clientOffset.x - canvasRect.left
//               const y = clientOffset.y - canvasRect.top
//               onDrop(item, x, y, earSide)
//             }
//           }
//         }
//         setHoveredLocation(null)
//         return undefined
//       },
//       collect: (monitor) => ({
//         isOver: !!monitor.isOver(),
//       }),
//     }),
//     [hoveredLocation, view, earSide, canvasSize, onDrop],
//   )

//   // Clear hovered location when not dragging
//   useEffect(() => {
//     if (!isOver) {
//       setHoveredLocation(null)
//       setIsDraggingOver(false)
//     }
//   }, [isOver])

//   // Use a clearer ear image for side view
//   const sideEarImage = "/images/ear-side-clear.png"

//   // Get profile image based on view
//   const profileImage = "/images/ear-side.png"
//   // Apply a CSS filter to simulate different skin tones
//   const getSkinToneFilter = () => {
//     switch (skinColor) {
//       case "light":
//         return "none"
//       case "medium":
//         return "sepia(0.4) brightness(0.9)"
//       case "dark":
//         return "sepia(0.8) brightness(0.6)"
//       default:
//         return "none"
//     }
//   }

//   // Define earring size - increased for better visibility
//   const earringSize = 50 // Increased from 12 to 50

//   return (
//     <div className="flex flex-col items-center gap-4">
//       {/* Controls for skin color and ear side */}
//       <div className="flex flex-wrap gap-4 justify-center w-full mb-2">
//         <div className="flex items-center gap-2">
//           <span className="text-sm font-medium">Skin:</span>
//           <div className="flex rounded-md overflow-hidden">
//             {skinColorOptions.map((option) => (
//               <button
//                 key={option.id}
//                 onClick={() => setSkinColor(option.id)}
//                 className={`px-3 py-1 text-sm flex items-center gap-1 ${
//                   skinColor === option.id ? "bg-black text-white" : "bg-gray-200"
//                 }`}
//               >
//                 <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: option.color }}></span>
//                 {option.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="flex items-center gap-2">
//           <span className="text-sm font-medium">Ear:</span>
//           <div className="flex rounded-md overflow-hidden">
//             <button
//               onClick={() => onEarSideChange("left")}
//               className={`px-3 py-1 text-sm ${earSide === "left" ? "bg-black text-white" : "bg-gray-200"}`}
//             >
//               Left
//             </button>
//             <button
//               onClick={() => onEarSideChange("right")}
//               className={`px-3 py-1 text-sm ${earSide === "right" ? "bg-black text-white" : "bg-gray-200"}`}
//             >
//               Right
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Ear canvas with drop zone */}
//       <div
//         ref={(node) => {
//           drop(node)
//           canvasRef.current = node
//         }}
//         className={`relative w-full max-w-2xl h-[600px] border rounded-lg overflow-hidden ${isOver ? "bg-gray-100" : "bg-white"}`}
//       >
//         {/* Profile/Ear image based on selections */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Image
//             src={profileImage || "/placeholder.svg"}
//             alt={`Profile with ${skinColor} skin tone, ${earSide} ear`}
//             fill
//             className={`${view === "side" ? "object-contain" : "object-cover"} object-center`}
//             style={{
//               filter: getSkinToneFilter(),
//               // Only apply transform for side view when left ear is selected
//               transform: view === "side" && earSide === "left" ? "scaleX(-1)" : "none",
//             }}
//             priority
//             unoptimized
//           />
//         </div>

//         {/* Only show piercing locations when dragging over the canvas */}
//         {isDraggingOver && (
//           <>
//             {piercingLocations[view][earSide].map((location) => (
//               <div
//                 key={location.id}
//                 className={`absolute rounded-full ${
//                   hoveredLocation?.id === location.id
//                     ? "bg-yellow-400 bg-opacity-50 border-2 border-yellow-500"
//                     : "bg-white bg-opacity-30 border-2 border-white"
//                 } transition-all duration-200`}
//                 style={{
//                   left: `${location.x - location.width / 2}%`,
//                   top: `${location.y - location.height / 2}%`,
//                   width: `${location.width}%`,
//                   height: `${location.height}%`,
//                   zIndex: hoveredLocation?.id === location.id ? 20 : 10,
//                 }}
//               >
//                 {hoveredLocation?.id === location.id && (
//                   <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
//                     {location.name}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </>
//         )}

//         {/* Placed earrings */}
//         {placedEarrings
//           .filter((item) => item.earSide === earSide) // Only show earrings for the selected ear side
//           .map((item) => {
//             return (
//               <div
//                 key={item.id}
//                 className={`absolute cursor-pointer transition-all ${selectedEarringId === item.id ? "ring-2 ring-black rounded-full" : ""}`}
//                 style={{
//                   left: `${item.x - earringSize / 2}px`, // Center the earring on the drop point
//                   top: `${item.y - earringSize / 2}px`, // Center the earring on the drop point
//                   zIndex: 30,
//                 }}
//                 onClick={() => onSelect(item.id)}
//                 onDoubleClick={() => onRemove(item.id)}
//               >
//                 {/* Dotted circle highlight around the earring */}
//                 <div
//                   className="absolute rounded-full border-2 border-white border-dashed animate-pulse"
//                   style={{
//                     width: `${earringSize + 20}px`,
//                     height: `${earringSize + 20}px`,
//                     top: `-10px`,
//                     left: `-10px`,
//                     opacity: 0.8,
//                   }}
//                 ></div>

//                 <div className="relative" style={{ width: `${earringSize}px`, height: `${earringSize}px` }}>
//                   <Image
//                     src={item.earring.image[item.color] || "/placeholder.svg"}
//                     alt={item.earring.name}
//                     fill
//                     className="object-contain"
//                     unoptimized
//                   />
//                 </div>
//                 {selectedEarringId === item.id && item.piercingLocation && (
//                   <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
//                     {piercingLocations[view][earSide].find((loc) => loc.id === item.piercingLocation)?.name ||
//                       item.piercingLocation}
//                   </div>
//                 )}
//               </div>
//             )
//           })}

//         {isDraggingOver ? (
//           <div className="absolute bottom-2 right-2 text-xs text-white bg-black bg-opacity-70 px-2 py-1 rounded">
//             Drop on a highlighted piercing location
//           </div>
//         ) : (
//           <div className="absolute bottom-2 right-2 text-xs text-gray-400 bg-white bg-opacity-70 px-2 py-1 rounded">
//             Drag earrings onto the ear to see piercing locations
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }






///////////////////////////////////////////



"use client"

import { useRef, useState, useEffect } from "react"
import { useDrop } from "react-dnd"
import Image from "next/image"

// Skin color options with display names and CSS color values
const skinColorOptions = [
  { id: "light", name: "Light", color: "#F5D0B9" },
  { id: "medium", name: "Medium", color: "#C68642" },
  { id: "dark", name: "Dark", color: "#6B4423" },
]

// Define piercing locations for different ear views
const piercingLocations = {
  front: {
    right: [
      { id: "lobe", name: "Lobe", x: 75, y: 70, width: 20, height: 20 },
      { id: "helix", name: "Helix", x: 70, y: 30, width: 20, height: 20 },
      { id: "tragus", name: "Tragus", x: 55, y: 50, width: 15, height: 15 },
      { id: "conch", name: "Conch", x: 60, y: 45, width: 18, height: 18 },
      { id: "daith", name: "Daith", x: 55, y: 40, width: 15, height: 15 },
    ],
    left: [
      { id: "lobe", name: "Lobe", x: 25, y: 70, width: 20, height: 20 },
      { id: "helix", name: "Helix", x: 30, y: 30, width: 20, height: 20 },
      { id: "tragus", name: "Tragus", x: 45, y: 50, width: 15, height: 15 },
      { id: "conch", name: "Conch", x: 40, y: 45, width: 18, height: 18 },
      { id: "daith", name: "Daith", x: 45, y: 40, width: 15, height: 15 },
    ],
  },
  side: {
    right: [
      { id: "lobe", name: "Lobe", x: 50, y: 75, width: 20, height: 20 },
      { id: "helix", name: "Helix", x: 30, y: 25, width: 20, height: 20 },
      { id: "tragus", name: "Tragus", x: 45, y: 50, width: 15, height: 15 },
      { id: "conch", name: "Conch", x: 35, y: 45, width: 18, height: 18 },
      { id: "daith", name: "Daith", x: 40, y: 40, width: 15, height: 15 },
      { id: "forward-helix", name: "Forward Helix", x: 65, y: 40, width: 15, height: 15 },
    ],
    left: [
      { id: "lobe", name: "Lobe", x: 50, y: 75, width: 20, height: 20 },
      { id: "helix", name: "Helix", x: 30, y: 25, width: 20, height: 20 },
      { id: "tragus", name: "Tragus", x: 45, y: 50, width: 15, height: 15 },
      { id: "conch", name: "Conch", x: 35, y: 45, width: 18, height: 18 },
      { id: "daith", name: "Daith", x: 40, y: 40, width: 15, height: 15 },
      { id: "forward-helix", name: "Forward Helix", x: 35, y: 40, width: 15, height: 15 },
    ],
  },
}

export default function EarCanvas({
  view,
  placedEarrings,
  onDrop,
  onRemove,
  onSelect,
  selectedEarringId,
  earSide,
  onEarSideChange,
}) {
  const canvasRef = useRef(null)
  const [skinColor, setSkinColor] = useState("medium") // Default to medium to match the image
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })
  const [hoveredLocation, setHoveredLocation] = useState(null)
  const [isDraggingOver, setIsDraggingOver] = useState(false)

  // Update canvas size on mount and resize
  useEffect(() => {
    const updateCanvasSize = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.getBoundingClientRect()
        setCanvasSize({ width, height })
      }
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)
    return () => window.removeEventListener("resize", updateCanvasSize)
  }, [])

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "earring",
      hover: (item, monitor) => {
        setIsDraggingOver(true)
        const canvasRect = canvasRef.current?.getBoundingClientRect()
        if (canvasRect) {
          const clientOffset = monitor.getClientOffset()
          if (clientOffset) {
            const x = clientOffset.x - canvasRect.left
            const y = clientOffset.y - canvasRect.top

            // Calculate percentages
            const xPercent = (x / canvasRect.width) * 100
            const yPercent = (y / canvasRect.height) * 100

            // Find the closest piercing location
            const locations = piercingLocations[view][earSide]
            const closestLocation = locations.find((loc) => {
              return (
                xPercent >= loc.x - loc.width / 2 &&
                xPercent <= loc.x + loc.width / 2 &&
                yPercent >= loc.y - loc.height / 2 &&
                yPercent <= loc.y + loc.height / 2
              )
            })

            setHoveredLocation(closestLocation || null)
          }
        }
      },
      drop: (item, monitor) => {
        console.log("Drop detected in EarCanvas")
        setIsDraggingOver(false)
        if (hoveredLocation) {
          // If hovering over a valid location, use that location's coordinates
          const canvasRect = canvasRef.current?.getBoundingClientRect()
          if (canvasRect) {
            // Convert percentage to actual pixels
            const x = (hoveredLocation.x / 100) * canvasRect.width
            const y = (hoveredLocation.y / 100) * canvasRect.height
            onDrop(item, x, y, earSide, hoveredLocation.id)
          }
        } else {
          // Otherwise use the drop coordinates
          const canvasRect = canvasRef.current?.getBoundingClientRect()
          if (canvasRect) {
            const clientOffset = monitor.getClientOffset()
            if (clientOffset) {
              const x = clientOffset.x - canvasRect.left
              const y = clientOffset.y - canvasRect.top
              onDrop(item, x, y, earSide)
            }
          }
        }
        setHoveredLocation(null)
        return undefined
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [hoveredLocation, view, earSide, canvasSize, onDrop],
  )

  // Clear hovered location when not dragging
  useEffect(() => {
    if (!isOver) {
      setHoveredLocation(null)
      setIsDraggingOver(false)
    }
  }, [isOver])

  // Always use the side ear image
  const profileImage = "/images/ear-side.png"

  // Apply a CSS filter to simulate different skin tones
  const getSkinToneFilter = () => {
    switch (skinColor) {
      case "light":
        return "none"
      case "medium":
        return "sepia(0.4) brightness(0.9)"
      case "dark":
        return "sepia(0.8) brightness(0.6)"
      default:
        return "none"
    }
  }

  // Define earring size - increased for better visibility
  const earringSize = 50 // Increased from 12 to 50

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Controls for skin color and ear side */}
      <div className="flex flex-wrap gap-4 justify-center w-full mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Skin:</span>
          <div className="flex rounded-md overflow-hidden">
            {skinColorOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSkinColor(option.id)}
                className={`px-3 py-1 text-sm flex items-center gap-1 ${
                  skinColor === option.id ? "bg-black text-white" : "bg-gray-200"
                }`}
              >
                <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: option.color }}></span>
                {option.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Ear:</span>
          <div className="flex rounded-md overflow-hidden">
            <button
              onClick={() => onEarSideChange("left")}
              className={`px-3 py-1 text-sm ${earSide === "left" ? "bg-black text-white" : "bg-gray-200"}`}
            >
              Left
            </button>
            <button
              onClick={() => onEarSideChange("right")}
              className={`px-3 py-1 text-sm ${earSide === "right" ? "bg-black text-white" : "bg-gray-200"}`}
            >
              Right
            </button>
          </div>
        </div>
      </div>

      {/* Ear canvas with drop zone */}
      <div
        ref={(node) => {
          drop(node)
          canvasRef.current = node
        }}
        className={`relative w-full max-w-2xl h-[600px] border rounded-lg overflow-hidden ${isOver ? "bg-gray-100" : "bg-white"}`}
      >
        {/* Profile/Ear image based on selections */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={profileImage || "/placeholder.svg"}
            alt={`Profile with ${skinColor} skin tone, ${earSide} ear`}
            fill
            className="object-contain object-center"
            style={{
              filter: getSkinToneFilter(),
              // Only apply transform for side view when left ear is selected
              transform: earSide === "left" ? "scaleX(-1)" : "none",
            }}
            priority
            unoptimized
          />
        </div>

        {/* Only show piercing locations when dragging over the canvas */}
        {isDraggingOver && (
          <>
            {piercingLocations[view][earSide].map((location) => (
              <div
                key={location.id}
                className={`absolute rounded-full ${
                  hoveredLocation?.id === location.id
                    ? "bg-yellow-400 bg-opacity-50 border-2 border-yellow-500"
                    : "bg-white bg-opacity-30 border-2 border-white"
                } transition-all duration-200`}
                style={{
                  left: `${location.x - location.width / 2}%`,
                  top: `${location.y - location.height / 2}%`,
                  width: `${location.width}%`,
                  height: `${location.height}%`,
                  zIndex: hoveredLocation?.id === location.id ? 20 : 10,
                }}
              >
                {hoveredLocation?.id === location.id && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {location.name}
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        {/* Placed earrings */}
        {placedEarrings
          .filter((item) => item.earSide === earSide) // Only show earrings for the selected ear side
          .map((item) => {
            return (
              <div
                key={item.id}
                className={`absolute cursor-pointer transition-all ${selectedEarringId === item.id ? "ring-2 ring-black rounded-full" : ""}`}
                style={{
                  left: `${item.x - earringSize / 2}px`, // Center the earring on the drop point
                  top: `${item.y - earringSize / 2}px`, // Center the earring on the drop point
                  zIndex: 30,
                }}
                onClick={() => onSelect(item.id)}
                onDoubleClick={() => onRemove(item.id)}
              >
                {/* Dotted circle highlight around the earring */}
                <div
                  className="absolute rounded-full border-2 border-white border-dashed animate-pulse"
                  style={{
                    width: `${earringSize + 20}px`,
                    height: `${earringSize + 20}px`,
                    top: `-10px`,
                    left: `-10px`,
                    opacity: 0.8,
                  }}
                ></div>

                <div className="relative" style={{ width: `${earringSize}px`, height: `${earringSize}px` }}>
                  <Image
                    src={item.earring.image[item.color] || "/placeholder.svg"}
                    alt={item.earring.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                {selectedEarringId === item.id && item.piercingLocation && (
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {piercingLocations[view][earSide].find((loc) => loc.id === item.piercingLocation)?.name ||
                      item.piercingLocation}
                  </div>
                )}
              </div>
            )
          })}

        {isDraggingOver ? (
          <div className="absolute bottom-2 right-2 text-xs text-white bg-black bg-opacity-70 px-2 py-1 rounded">
            Drop on a highlighted piercing location
          </div>
        ) : (
          <div className="absolute bottom-2 right-2 text-xs text-gray-400 bg-white bg-opacity-70 px-2 py-1 rounded">
            Drag earrings onto the ear to see piercing locations
          </div>
        )}
      </div>
    </div>
  )
}


