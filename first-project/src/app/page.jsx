'use client'

import React, { useState } from "react"
import Left from "./components/Left";
import Right from "./components/Right"
import Profile from "./components/Profile";
import './globals.css'

export default function Home() {
 
  
  return (
    <div className="left-and-right">
    <Left></Left>
    <Right></Right>
    </div>
  );
}
