'use client';
import {Button} from '@nextui-org/react'

export default function Home() {
  const handleClick = () => {
    console.log("Handle Click");
  }
  return (
    <div>
      <Button color="primary" variant="shadow" onClick={handleClick}>Click me</Button>
    </div>
  );
}
