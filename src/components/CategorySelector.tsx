"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

type Props = {
    selectedCategory: string;
    onChange: (category: string) => void;
}

const CategorySelector = ({ selectedCategory, onChange }: Props) => {

    const [categories, setCategories] = useState<any[]>([]);

    const getCategories = async () => {
        try {
            const categories = await axios.get('http://localhost:8000/api/v1/categories/all');
            setCategories(categories.data);
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <select
            value={selectedCategory}
            onChange={(e) => onChange(e.target.value)}
            className='px-2 py-2 w-max bg-foreground border-none text-background rounded-md'
        >
            {categories.map((category: any) => (
                <option
                    key={category.id}
                    value={category.id}
                    className='bg-background text-foreground'
                >
                    {category.name}
                </option>
            ))}
        </select>
    );
};

export default CategorySelector;
