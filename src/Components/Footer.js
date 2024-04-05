import React from 'react'

const Footer = () => {
  return (
    <footer className='py-10 px-4' style={{background:"var(--black3)"}}>
        <div className='footer-container flex flex-col gap-6 items-center max-w-screen-md m-auto'>
            <div className='links flex items-center gap-8'>
                <p>Terms Of Use</p>
                <p>Privacy-Policy</p>
                <p>About</p>
                <p>Blog</p>
                <p>FAQ</p>
            </div>
            <p className='text-center text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className='socials flex items-center gap-6'>
                <div className='facebook rounded-full px-4 py-3' style={{background:"#04152D"}}><i class="fa-brands fa-facebook"></i></div>
                <div className='instagram rounded-full px-4 py-3' style={{background:"#04152D"}}><i class="fa-brands fa-instagram"></i></div>
                <div className='twitter rounded-full px-4 py-3' style={{background:"#04152D"}}><i class="fa-brands fa-twitter"></i></div>
                <div className='linkedin rounded-full px-4 py-3' style={{background:"#04152D"}}><i class="fa-brands fa-linkedin"></i></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
