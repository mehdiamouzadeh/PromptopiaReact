import '@styles/globals.css'

export const metadata = {
    title:"Promptopia",
    description:"Discover and Share AI Prompts"
}


const RootLayout = ({children}) => {
    console.log();
  return (
    <html lang='eng'>
      <body>
         <div className='main'>
            <div className='gradient'/>
         </div>

         <main className='app'>
          {children}
         </main>
      </body>
    </html>
  )
}

export default RootLayout