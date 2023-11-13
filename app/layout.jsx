import '@styles/globals.css';

import Provider from '@context/Provider';

export const metadata = {
    title: "Something",
    description: "Somewhere"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout