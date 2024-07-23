import React from 'react'

export default function Blank({empty}) {
  return (
   <>
      <style>{`
         .non-empty { background-color:#171717;}
      `}</style>
      <div  div className={`${empty ? 'empty' : 'non-empty'} thumbnailBox h-full blank`} >
      </div>
   </>
  )
}
