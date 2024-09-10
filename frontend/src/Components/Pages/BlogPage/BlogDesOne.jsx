import React from 'react'
import Blog_img1 from '../../../assets/blog/Blog_img1.jpg'
import Blog_img2 from '../../../assets/blog/Blog_img2.jpg'
import Blog_img3 from '../../../assets/blog/Blog_img3.jpg'
import { CardRotate } from '../../ui/CardRotate';

const BlogDesOne = () => {
    return (
        <div className="mt-[5em] w-full grid lg:grid-cols-2 grid-cols-1">
            <div className="sm:-mt-40 -mt-40">

                <CardRotate pics={[Blog_img1, Blog_img2, Blog_img3]} />
            </div>
            <div className="mr-2 flex flex-col gap-5 sm:mt-0 -mt-40">
                <h1 className=" text-[#18dae4] font-semibold text-3xl lg:mb-3 mt-4">
                    What is Cryptocurrency ?
                </h1>
                {/* <h2 className="font-semibold md:text-5xl sm:text-3xl text-2xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h2> */}
                <p className=" font-light">
                    Cryptocurrency is a type of digital or virtual money that uses cryptography (a method of securing information) to protect transactions. It typically operates on a decentralized network, like blockchain technology. This decentralization means that no central authority, such as a bank or government, controls it.
                </p>
                <h2 className="font-semibold md:text-5xl sm:text-3xl text-2xl">
                    Key Features:
                </h2>
                <p className=" font-light">
                    Decentralization: Unlike traditional banking systems, which are controlled by central authorities, cryptocurrencies operate on a decentralized network. This means there’s no single point of control, making it more transparent and resistant to tampering.

                    Transparency: Transactions are recorded on a public ledger called a blockchain. This ledger is accessible to anyone, which adds a layer of transparency.

                    Security: Cryptography ensures that data and transactions are secure, preventing unauthorized access or tampering.
                </p>
                <h2 className="font-semibold md:text-5xl sm:text-3xl text-2xl">
                    History of Cryptocurrency
                </h2>
                <p className=" font-light">
                    Bitcoin Launch (2009): Bitcoin was introduced in 2009 by an anonymous person or group known as Satoshi Nakamoto. It was the first decentralized digital currency and made blockchain technology popular.

                    Ethereum (2015): Launched by Vitalik Buterin in 2015, Ethereum introduced the concept of smart contracts and decentralized applications (dApps). Unlike Bitcoin, which was primarily a digital currency, Ethereum was designed as a platform for creating and running applications on its blockchain.

                    Rise of Altcoins: Following Bitcoin's success, other cryptocurrencies, known as altcoins, were created. Examples include Litecoin (2011), Ripple (2012), and Dogecoin (2013). Each altcoin has its unique features and use cases.

                    Initial Coin Offerings (ICO): In 2017-18, ICOs became a popular way for cryptocurrency projects to raise funds. However, this period also saw a rise in fraudulent schemes, prompting increased scrutiny.

                    Regulatory Scrutiny and Market Evolution: After 2018, there was increased regulatory scrutiny and market volatility. Governments introduced stricter regulations, and institutions began exploring the adoption of cryptocurrencies. This period also saw consolidation in the market as some projects failed and others emerged stronger.                </p>


            </div>
        </div>
    );
}

export default BlogDesOne