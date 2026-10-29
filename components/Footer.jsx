import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const exploretLinks = [
    {
      name:'Links to Latest Stories', 
      href: '/links to Latest Stories', 
      className:'text-[#8A91A3]'
    }, 
    {
      name:'Categories', 
      href: '/categories', 
      className:'text-[#8A91A3]'
    }, 
    {
      name:'Popular Posts', 
      href: '/popular posts', 
      className:'text-[#8A91A3]'
    }
  ];

  const companyLinks = [
    {
      name:'About Sayit', 
      href: '/about sayit', 
      className:'text-[#8A91A3]'
    }, 
    {
      name:'Our Writers', 
      href: '/our writers', 
      className:'text-[#8A91A3]'
    }, 
    {
      name:'Contact', 
      href: '/contact', 
      className:'text-[#8A91A3]'
    }
  ];

  const legalLinks = [
    {
      name:'Privacy Policy', 
      href: '/privacy policy', 
      className:'text-[#8A91A3]'
    }, 
    {
      name:'Terms of Service', 
      href: '/terms of service', 
      className:'text-[#8A91A3]'
    }, 
    {
      name:'Cookie Policy', 
      href: '/cookie policy', 
      className:'text-[#8A91A3]'
    }
  ]
  return (
    <div className=''>
      <div className='mx-auto max-w-7xl z-4 relative grid grid-cols-[2fr_1fr_1fr_1fr] gap-6 pt-15'>
        <div>
          <h4 className='font-bold text-3xl text-white'>Sayit .</h4>
          <p className='text-[#8A91A3] mt-5'>Sayit is a space for inspiring stories <br />that spark new ideas and bring people together.</p>
          <div className='flex gap-5 mt-6'>
            <div className='w-10 h-10 rounded-full bg-[#242738] flex justify-center items-center font-bold text-white'>X</div>
            <div className='w-10 h-10 rounded-full bg-[#242738] flex justify-center items-center font-bold text-white'>In</div>
            <div className='w-10 h-10 rounded-full bg-[#242738] flex justify-center items-center font-bold text-white'>Ig</div>
            <div className='w-10 h-10 rounded-full bg-[#242738] flex justify-center items-center font-bold text-white'>f</div>
          </div>
        </div>

        <div>
          <p className='text-white font-medium'>EXPLORE</p>
          <ul className='mt-5'>
            <li className='grid grid-rows-3 gap-2'>
              {exploretLinks.map((explore) =>(
                <Link
                key={explore.name}
                href={explore.href}
                className={explore.className}
                >
                  {explore.name}

                </Link>

              ))}
            </li>
          </ul>
        </div>
        
        <div>
          <p className='text-white font-medium'>COMPANY</p>
          <ul className='mt-5'>
            <li className='grid grid-rows-3 gap-2'>
              {companyLinks.map((company) =>(
                <Link
                key={company.name}
                href={company.href}
                className={company.className}
                >
                  {company.name}

                </Link>

              ))}
            </li>
          </ul>
        </div>

        <div>
          <p className='text-white font-medium'>LEGAL</p>
          <ul className='mt-5'>
            <li className='grid grid-rows-3 gap-2'>
              {legalLinks.map((legal) =>(
                <Link
                key={legal.name}
                href={legal.href}
                className={legal.className}
                >
                  {legal.name}

                </Link>

              ))}
            </li>
          </ul>
        </div>
      </div>

      <hr className='text-[#9496a2] mx-auto max-w-7xl mt-9' />

      <div className='flex justify-between mx-auto max-w-7xl z-4 re'>
        <p className='text-[#8A91A3]'>ⓒ 2026 Sayit. All right reserved.</p>
        <p className='text-[#8A91A3]'>Made with Next.js & Tailwind Css</p>
      </div>
    </div>
  )
}

export default Footer
