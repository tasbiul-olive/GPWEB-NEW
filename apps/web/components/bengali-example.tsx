/**
 * Bengali Font Example Component
 *
 * Demonstrates the usage of the font-bengali utility class
 * from the custom Noto Sans Bengali font
 */

export function BengaliExample() {
  return (
    <div className="space-y-4 p-4">
      <div>
        <h3 className="mb-2 text-lg font-semibold">স্বাগতম</h3>
        <p className="text-sm text-muted-foreground">Welcome</p>
      </div>

      <div>
        <p className="text-base">মাই অফার</p>
        <p className="text-base">মাই অফার</p>
        <p className="text-base">My Offers</p>
        <p className="text-base">My Offers</p>
        <p className="mt-2 text-sm text-muted-foreground">
          This is a Bengali font example. You can use the font-bengali class on
          any element.
        </p>
      </div>
    </div>
  )
}
