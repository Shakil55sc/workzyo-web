"use client";
import React from "react";

interface CategoryCardProps {
  title: string;
  desc: string;
  icon: string;
}

export default function CategoryCard({ title, desc, icon }: CategoryCardProps) {
  return (
    <div className="p-6 bg-gray-900 rounded-2xl text-white shadow-md hover:shadow-lg transition cursor-pointer">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}