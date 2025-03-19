// "use client"

// import { useDrag } from "react-dnd"
// import Image from "next/image"
// import { useState } from "react"

// export default function EarringItem({ earring }) {
//   // State to track which color is currently being displayed in the preview
//   const [previewColor, setPreviewColor] = useState(Object.keys(earring.image)[0])

//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "earring",
//     item: earring,
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }))

//   // Get the image for the current preview color
//   const previewImage = earring.image[previewColor]

//   // Color hex map for display
//   const colorHexMap = {
//     gold: "#e8c70c",
//     bronze: "#f3a85d",
//     silver: "#C0C0C0",
//   }

//   return (
//     <div ref={drag} className={`p-2 cursor-grab transition-all ${isDragging ? "opacity-50" : "opacity-100"}`}>
//       <div className="flex flex-col items-center">
//         <div className="relative w-20 h-20 mb-2">
//           <Image
//             src={previewImage || "/placeholder.svg"}
//             alt={earring.name}
//             fill
//             className="object-contain"
//             unoptimized
//           />
//         </div>
//         <h3 className="text-sm font-medium text-center">{earring.name}</h3>
//         <p className="text-sm text-gray-600">{earring.price}</p>

//         {/* Color options preview with interactive selection */}
//         <div className="flex gap-1 mt-1">
//           {Object.keys(earring.image).map((color) => (
//             <button
//               key={color}
//               onClick={() => setPreviewColor(color)}
//               className={`w-4 h-4 rounded-full border ${previewColor === color ? "border-black" : "border-transparent"}`}
//               style={{ backgroundColor: colorHexMap[color] || color }}
//               aria-label={`Preview ${color} color`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


//////////////////////////////////////////////////////////

// "use client"

// import { useDrag } from "react-dnd"
// import Image from "next/image"
// import { useState } from "react"

// export default function EarringItem({ earring }) {
//   // State to track which color is currently being displayed in the preview
//   const [previewColor, setPreviewColor] = useState(Object.keys(earring.image)[0])

//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "earring",
//     item: earring,
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }))

//   // Get the image for the current preview color
//   const previewImage = earring.image[previewColor]

//   // Color hex map for display
//   const colorHexMap = {
//     gold: "#e8c70c",
//     bronze: "#f3a85d",
//     silver: "#C0C0C0",
//   }

//   return (
//     <div ref={drag} className={`p-2 cursor-grab transition-all ${isDragging ? "opacity-50" : "opacity-100"}`}>
//       <div className="flex flex-col items-center">
//         <div className="relative w-20 h-20 mb-2">
//           <Image
//             src={previewImage || "/placeholder.svg"}
//             alt={earring.name}
//             fill
//             className="object-contain"
//             unoptimized
//           />
//         </div>
//         <h3 className="text-sm font-medium text-center">{earring.name}</h3>
//         <p className="text-sm text-gray-600">{earring.price}</p>

//         {/* Color options preview with interactive selection */}
//         <div className="flex gap-1 mt-1">
//           {Object.keys(earring.image).map((color) => (
//             <button
//               key={color}
//               onClick={() => setPreviewColor(color)}
//               className={`w-4 h-4 rounded-full border ${previewColor === color ? "border-black" : "border-transparent"}`}
//               style={{ backgroundColor: colorHexMap[color] || color }}
//               aria-label={`Preview ${color} color`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }



///////////////////////////////
"use client"

import { useDrag } from "react-dnd"
import Image from "next/image"
import { useState } from "react"

export default function EarringItem({ earring }) {
  // State to track which color is currently being displayed in the preview
  const [previewColor, setPreviewColor] = useState(Object.keys(earring.image)[0])

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "earring",
    item: earring,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  // Get the image for the current preview color
  const previewImage = earring.image[previewColor]

  // Color hex map for display
  const colorHexMap = {
    gold: "#e8c70c",
    bronze: "#f3a85d",
    silver: "#C0C0C0",
  }

  return (
    <div ref={drag} className={`p-2 cursor-grab transition-all ${isDragging ? "opacity-50" : "opacity-100"}`}>
      <div className="flex flex-col items-center">
        <div className="relative w-20 h-20 mb-2">
          <Image
            src={previewImage || "/placeholder.svg"}
            alt={earring.name}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
        <h3 className="text-sm font-medium text-center">{earring.name}</h3>
        <p className="text-sm text-gray-600">{earring.price}</p>

        {/* Color options preview with interactive selection */}
        <div className="flex gap-1 mt-1">
          {Object.keys(earring.image).map((color) => (
            <button
              key={color}
              onClick={() => setPreviewColor(color)}
              className={`w-4 h-4 rounded-full border ${previewColor === color ? "border-black" : "border-transparent"}`}
              style={{ backgroundColor: colorHexMap[color] || color }}
              aria-label={`Preview ${color} color`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

