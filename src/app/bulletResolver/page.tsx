"use client";

import { useState } from "react";
import { debounce } from "lodash";
import cn from "classnames";

const data = [
    [26, 10, 18, 16, 23, 20, 6, '6'],
    [20, 9, 21, 27, 1, 7, 26, '16'],
    [18, 21, 9, 1, 17, 26, 2, '10'],
    [11, 20, 33, 9, 23, 14, 13, '37'],
    [8, 29, 1, 17, 22, 3, 34, '54'],
    [10, 29, 1, 32, 25, 9, 27, '39'],
    [2, 34, 28, 22, 26, 5, 11, '48'],
    [7, 12, 14, 1, 35, 3, 32, '40'],
    [24, 31, 34, 27, 26, 32, 6, '42'],
    [8, 21, 27, 31, 12, 9, 3, '51'],
    [34, 5, 30, 32, 22, 29, 17, '2'],
    [8, 17, 4, 18, 24, 3, 14, '51'],
    [6, 17, 13, 9, 33, 27, 10, '46'],
    [33, 30, 13, 16, 9, 21, 19, '21'],
    [26, 15, 31, 3, 9, 21, 17, '6'],
    [1, 26, 17, 16, 15, 8, 20, '36'],
    [31, 8, 1, 9, 33, 26, 12, '15'],
    [29, 34, 2, 26, 14, 16, 22, '13'],
    [20, 13, 32, 5, 27, 15, 17, '9'],
    [24, 29, 5, 19, 12, 2, 4, '10'],
    [24, 27, 26, 13, 21, 17, 18, '16'],
    [20, 4, 33, 12, 10, 19, 2, '21'],
    [9, 27, 16, 33, 25, 10, 34, '9'],
    [12, 10, 19, 33, 2, 24, 29, '43'],
    [33, 30, 27, 7, 28, 21, 13, '13'],
    [16, 26, 15, 34, 27, 35, 22, '10'],
    [18, 5, 1, 24, 4, 12, 29, '29'],
    [35, 1, 31, 17, 8, 16, 26, '41'],
    [15, 19, 13, 25, 11, 23, 4, '4'],
    [9, 20, 30, 1, 10, 32, 22, '16'],
    [15, 28, 17, 29, 25, 22, 14, '19'],
    [2, 28, 24, 9, 34, 18, 7, '47'],
    [35, 7, 31, 17, 8, 16, 26, '41'],
    [9, 20, 30, 7, 10, 32, 22, '16'],
    [25, 20, 9, 3, 18, 12, 17, '10'],
    [33, 31, 29, 20, 26, 28, 21, '27'],
    [31, 12, 3, 24, 7, 23, 8, '43'],
    [20, 13, 31, 33, 27, 4, 11, '18'],
    [32, 2, 9, 1, 21, 28, 12, '9'],
    [34, 16, 3, 20, 14, 24, 4, '30'],
    [34, 10, 11, 18, 2, 20, 24, '44'],
    [4, 5, 24, 22, 34, 25, 16, '45'],
    [4, 16, 30, 13, 25, 3, 10, '40'],
    [4, 13, 20, 18, 1, 27, 6, '11'],
    [23, 4, 24, 18, 22, 29, 25, '44']
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
  