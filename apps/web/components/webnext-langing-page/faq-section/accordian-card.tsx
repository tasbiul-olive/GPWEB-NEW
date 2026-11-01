import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@workspace/ui/components/accordion"
import type { FaqItem } from "@/lib/types/faq"
interface AccordianCardProps {
  items: FaqItem[]
  /** Accordion values expanded by default. */
  defaultOpenValues?: string[]
}
export default function AccordianCard({
  items,
  defaultOpenValues,
}: AccordianCardProps) {
  return (
    <Accordion
      type="multiple"
      className="flex h-full max-w-lg flex-col"
      defaultValue={defaultOpenValues}
    >
      {items.map((item) => (
        <AccordionItem className={"py-2"} key={item.value} value={item.value}>
          <AccordionTrigger className={"text-xl"}>
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
