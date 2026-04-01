import React from 'react';

const SimplePricing = () => {
    return (
        <div>
            <div className="rounded-xl px-10 mt-10 mb-5">

                <div className='flex flex-col justify-center items-center'>
                    <h2 className="text-4xl font-bold text-[#101727]">Simple, Transparent Pricing</h2>
                    <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                {/* pricing cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 bg-[#F2F2F2] rounded mt-6">
                    <div className="card w-96 bg-[#FFFFFF] shadow-sm rounded-xl">
                        <div className="card-body">

                            <div className="flex flex-col space-y-4">
                                <h2 className="text-3xl font-bold">Starter</h2>
                                <p>Perfect for getting started</p>
                                <span className="text-xl font-bold">$0/mo</span>
                            </div>
                            
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Community Support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>One project per month</span>
                                </li>

                            </ul>
                            <div className="mt-6">
                                <button className="bg-[#FFFFFF] btn-block text-purple-600 rounded-full py-2">Start Pro Trial</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F2F2F2] rounded mt-6 flex-1">
                        <div className="card w-96 bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm rounded-xl">
                            <div className="card-body">
                                <span className="badge badge-xs badge-warning">Most Popular</span>
                                <div className="flex justify-between">
                                    <h2 className="text-3xl font-bold">Pro</h2>
                                    <span className="text-xl">$29/mo</span>
                                </div>
                                <p>Best for professionals</p>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Access to all premium tools</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Unlimited templates</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Priority Support</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Unlimited projects</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Seamless cloud integration</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Advanced Analytics</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button className="bg-[#FFFFFF] btn-block text-purple-600 rounded-full py-2">Start Pro Trial</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card w-96 bg-[#F9FAFC] shadow-sm rounded-xl">
                        <div className="card-body">
                            
                            <div className="flex flex-col space-y-4">
                                <h2 className="text-3xl font-bold">Enterprise</h2>
                                <p>For teams and business</p>
                                <span className="text-xl font-bold">$99/mo</span>
                            </div>
                            
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom Integration</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Dedicated support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>SLA Guarantee</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom Branding</span>
                                </li>
                                
                            </ul>
                            <div className="mt-6">
                                <button className="text-[#FFFFFF] btn-block bg-purple-600 rounded-full py-2">Contact Sales</button>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default SimplePricing;