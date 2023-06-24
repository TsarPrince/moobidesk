import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from 'context/appContext';
import { client } from "lib/client";

const SanityLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const { setData } = useContext(AppContext)

  useEffect(() => {

    try {

      client.fetch(`*[_type in [
        'homePage',
        'customerSupportPage',
        'enterprisePage',
        'whatsappPage',
        'liveChatPage',
        'insurancePage',
        'retailPage',
        'pricingPage',
        'partnerPage',
        'requestDemoPage',
        'footerBig',
        'footerSmall',
        'navbar'
      ]]`)

        .then((data) => {
          console.log(data)
          setData({ ...data })
          setLoading(false)
        })
    } catch (error: any) {
      alert(error.message || 'Something Went Wrong')
    }
  }, [])

  return <>
    {
      loading
        ? <div>Loading...</div>
        : <div>{children}</div>
    }
  </>
}

export default SanityLoader