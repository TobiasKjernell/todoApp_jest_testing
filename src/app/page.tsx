'use client'

import Header from "./components/Header";
import InputContainer from "./components/InputContainer";
import List from "./components/List";
import { useEffect, useState } from "react";
import { IListItem } from "./interfaces/interfaces";
import { v4 as uuid } from 'uuid';
import Bin from "./components/Bin";

export default function Home() {
  const [tasks, setTasks] = useState<IListItem[]>([]);
  const [bin, setBin] = useState<IListItem[]>([]);

  const handleSetTask = (item: IListItem) => {
    setTasks(state => [...state, item]);
  }

  const handleDeleteItem = (id: string): void => {
    const newTaskList = tasks.filter(item => item.id !== id);
    const toBin = tasks.filter(item => item.id === id);
    toBin.forEach(item => item.isInBin = true)
    setTasks(newTaskList);
    setBin([...bin, ...toBin])
  }

  const handleBinItem = (id: string): void => {
    const backTaskList = bin.filter(item => item.id === id);
    const updateBin = bin.filter(item => item.id !== id);
    backTaskList.forEach(item => item.isInBin = false)
    setTasks([...tasks, ...backTaskList]);
    setBin([...updateBin])
  }

  const handleClearBin = (): void => {
    setBin([]);
  }

  //pre-pop two items
  useEffect(() => {
    Array.from({ length: 2 }).map((_, i) => {
      const newItem: IListItem = {
        text: 'text',
        id: uuid() + i,
        isInBin: false
      }
      setTasks(state => [...state, newItem])
    })
  }, [])

  return (
    <div className="flex items-center justify-center h-screen text-gray-400">

      <Bin bin={bin} onClearBin={handleClearBin} onDeleteItem={handleBinItem} />

      <div className="h-[700px] w-[400px] bg-amber-300 rounded-3xl border-2 border-black flex flex-col overflow-hidden shadow-2xl shadow-black relative">
        <Header />
        <List items={tasks} onDelete={handleDeleteItem} />
        <InputContainer addTask={handleSetTask} />
      </div>
    </div>
  );
} 
