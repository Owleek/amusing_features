"use client";

import { useState } from "react";
import { debounce } from "lodash";
import cn from "classnames";

const data = [
    [26, 10, 18, 16, 23, 20, 6, '6'],
    [20, 9, 21, 27, 1, 7, 26, '16'],
    [18, 21, 9, 1, 17, 26, 2, '10']
];

export default function BulletResolverPage() {
    const [inputValue, setInputValue] = useState<string>('');
    const [inputArray, setInputArray] = useState<number[]>([]);
    const [filteredData, setFilteredData] = useState<(number | string)[][]>(data);

    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (value.trim() === '') {
            setFilteredData(data)
            setInputValue(value)
            setInputArray([])
            return
        }

        const arr = value.split(',').filter(n => n.trim() !== '').map(n => +n.trim());
        const filtered = data.filter(array => arr.every(n => array.includes(n)));

        setFilteredData(filtered);
        setInputArray(arr);
        setInputValue(value);
    }

    return (
      <div>
        <p><input type="text" value={inputValue} onChange={handleInputChange} /></p>
            <ul style={{padding: 0}}>
                {
                    filteredData.map((arr, index) => (
                        <li key={index} className="digit-row">
                            {/* @ts-ignore */}
                            { arr.map(n => <span className={cn('digit', {yellow: typeof n !== 'string', highlight: inputArray.includes(n), violet: typeof n === 'string'})}>{n}</span>) }
                        </li>
                    ))
                }    
            </ul>
      </div>
    )
  }
  