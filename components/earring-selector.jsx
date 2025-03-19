"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EarringItem from "./earring-item"

export default function EarringSelector({ earrings, selectedCategory, onSelectCategory }) {
  const categories = [
    { id: "all", name: "All" },
    { id: "studs", name: "Studs" },
    { id: "hoops", name: "Hoops" },
    { id: "drops", name: "Drops" },
  ]

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-xl font-bold mb-4">Select Earrings</h2>

      <Tabs defaultValue="all" value={selectedCategory} onValueChange={onSelectCategory}>
        <TabsList className="w-full grid grid-cols-4">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCategory} className="mt-4">
          <div className="grid grid-cols-2 gap-2 overflow-y-auto max-h-[calc(100vh-250px)]">
            {earrings.map((earring) => (
              <EarringItem key={earring.id} earring={earring} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

