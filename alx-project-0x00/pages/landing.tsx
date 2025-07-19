
import Card from "@/components/Card"
import Button from "@/components/Button"


const Landing: React.FC =() =>{
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold mb-4">Landing Page Buttons</h1>

      {/* Small, Medium, Large Buttons with Different Shapes */}
      <Button title="Small Rounded-sm" size="small" shape="rounded-sm" styles="bg-blue-500 text-white" />
      <Button title="Medium Rounded-md" size="medium" shape="rounded-md" styles="bg-green-500 text-white" />
      <Button title="Large Rounded-full" size="large" shape="rounded-full" styles="bg-red-500 text-white" />
      <Button title="Extra Button Rounded-lg" size="medium" shape="rounded-lg" styles="bg-red-500 text-white" />
    </div>
{/* 
            <div className="min-h-screen flex flex-col gap-6 justify-center items-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold">Landing Page Buttons</h1>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button title="Small - sm" size="small" shape="rounded-sm" />
        <Button title="Small - md" size="small" shape="rounded-md" />
        <Button title="Small - full" size="small" shape="rounded-full" />

        <Button title="Medium - sm" size="medium" shape="rounded-sm" />
        <Button title="Medium - md" size="medium" shape="rounded-md" />
        <Button title="Medium - full" size="medium" shape="rounded-full" />

        <Button title="Large - sm" size="large" shape="rounded-sm" />
        <Button title="Large - md" size="large" shape="rounded-md" />
        <Button title="Large - full" size="large" shape="rounded-full" />
      </div>
    </div> */}
        
        </div>
    )

}

export default Landing;