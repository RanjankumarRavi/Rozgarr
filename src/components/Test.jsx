/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from './ui/button'
// import { DropdownMenu } from './ui/dropdown-menu'
// import { Avatar } from './ui/avatar'
import { Menubar } from './ui/menubar'
import { Link } from 'react-router-dom'

import {

  Github,
  LogOut,
  Mail,
  Settings,
 
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,

} from "@/components/ui/dropdown-menu"


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function Test() {
  return (
    <>
    <div  className='m-4 '  >
        <h1>hi this is test</h1>
      <Button>login</Button>

     <div  >
     <DropdownMenu>
     <DropdownMenuTrigger>
     <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

     </DropdownMenuTrigger>
    <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
      <DropdownMenuItem> <Link to={"/"}>profile</Link>   </DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
    <DropdownMenuItem>
          <LogOut />
          <span>Log out</span>
         
        </DropdownMenuItem>
  </DropdownMenuContent>
   </DropdownMenu>

     </div>

     <div>
     <Select  className="bg-yellow-500">
      <SelectTrigger className="w-[180px] bg-gray-100 ">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="bg-yellow-500">
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
     </div>
     </div>

    </>
  )
}

export default Test
