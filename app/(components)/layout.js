export default function layout({children}) {
  return (
    <html>
        <body>
            <div className="bg-green-300">layout</div>
            {children}
        </body>
    </html>
  )
}
