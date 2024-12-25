// import {clsx , type classValue} from 'clsx';
// import {twMerge} from "tailwind-merge"

// export function cn (...inputs : classValue[]){
//     return twMerge(clsx(inputs  ))
// }
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
