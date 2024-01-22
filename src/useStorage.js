import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";

/**
 * @template T
 * @param {string} key 
 * @returns {T | null}
 */
function getStorageValue(key) {
  const value = window.localStorage.getItem(key)
  if (value === null) return null 
  try {
    const decoded = JSON.parse(value)
    return decoded
  } catch (err) {
    return value
  }
}

/**
 * 
 * @param {string} key 
 * @param {any} value 
 */
function setStorageValue(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

/**
 * @template T
 * @param {T} initialValue 
 * @param {string} key 
 */
export default function useStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue)

  const updateValue = useCallback((newValue) => {
    setValue(newValue)
    setStorageValue(key, newValue)
  }, [key])

  useEffect(() => {
    const storedValue = getStorageValue(key)
    if (!storedValue) {
      setStorageValue(key, initialValue)
      return
    }
    setValue(storedValue)
  }, [initialValue, key])

  return [value, updateValue]
}

