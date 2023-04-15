import React from 'react'
import { useEffect , useState, useCallback} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import {useCart} from "../components/Cart/Cart"

const COMMANDS = {
  OPEN_CART : 'open-cart'
}

export default function useAlan() {
  const [alanInstance, setAlanInstance] = useState()
  const {cart} = useCart() 

  const openCart = useCallback(() => {
    alanInstance.playText('Opening Cart')
    cart (true)
  }, [alanInstance])

  useEffect (() => {
   window.addEventListener(COMMANDS.OPEN_CART,openCart)

   return () => {
    window.removeEventListener(COMMANDS.OPEN_CART, openCart)
   }
  }, [alanInstance,openCart])
  useEffect (() => {
    if (alanInstance != null) return
    setAlanInstance (
     alanBtn ({
       key :'78b4bb26bc1215ba750d703b9bef903e2e956eca572e1d8b807a3e2338fdd0dc/stage',
       onCommand : ({command}) => {
        window.dispatchEvent(new CustomEvent(command))
        
       }
     })
    )
  }, [])

    return null
  
}
