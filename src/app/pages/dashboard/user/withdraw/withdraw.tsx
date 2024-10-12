"use client"

import BackButton from "@/app/components/backButton/backButton";
import Toast from "@/app/components/toast/toast";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import historyIcon from "@/app/public/images/history.png"
import bkashLogo from "@/app/public/images/bkash.png";
import nagadLogo from "@/app/public/images/nagad.png"
import rocketLogo from "@/app/public/images/rocket.png"
import Loading from "@/app/components/loading/loading";
import API_ENDPOINTS from "@/app/routes/api";
import axios from "axios";

type FormData = {
    phone: "",
    amount: "",
    paymentMethod: "bkash" | "nagad" | "rocket";
};

const Withdraw = () => {
    const Router = useRouter();

    const [toast, setToast] = useState({
        isShow: false,
        message: "",
        bgColor: ""
    });
    const [loginId, setLoginId] = useState<any>(null);
    const [withdrawDetails, setWithdrawDetails] = useState<any>(null);

    useEffect(() => {
        setLoginId(sessionStorage.getItem("loginId"));
    }, [loginId]);

    useEffect(() => {
        if (toast.isShow) {
            setTimeout(() => {
                setToast({
                    ...toast,
                    isShow: false
                })
            }, 5000);
        }
    }, [toast.isShow]);

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const selectedValue = watch("paymentMethod");

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const loggedinData = (await axios.get(API_ENDPOINTS.GetDataById+loginId)).data[0];
            if(loggedinData?.balance < 500) {
                setToast({
                    isShow: true,
                    message: `Minimum request amount is 500`,
                    bgColor: "red"
                });
            } else {
                await axios.post(API_ENDPOINTS.CreateWithdrawRequest, {
                    userId: loginId,
                    requestType: "withdraw",
                    transactionId: "N/A",
                    ...data,
                });

                setToast({
                    isShow: true,
                    message: `A request has been submitted wait to be verified.`,
                    bgColor: "blue"
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (loginId != null) {
        return (
            <>
                <Toast isShow={toast.isShow} message={toast.message} bgColor={toast.bgColor} />
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="border border-black/30 dark:border-white/20 rounded my-4 relative w-[90%] left-[5%] md:w-1/2 md:left-[25%] flex flex-col items-center justify-center ">
                            <div className="w-full p-2 grid grid-cols-3 border-b dark:border-white/20 border-black/30 mb-8">
                                <div className='w-10 h-10 col-span-1 rounded overflow-hidden'>
                                    <BackButton />
                                </div>
                                <h2 className="col-span-1 text-2xl font-bold text-center pb-2">Withdraw</h2>
                                <div className="w-full h-full col-span-1">
                                    <button type="button" className="w-10 h-10 rounded absolute right-2 top-2 border dark:border-white/20 border-black/30 duration-300 dark:hover:bg-white/20 hover:bg-black/30">
                                        <Image
                                            src={historyIcon}
                                            alt="NF"
                                            className="scale-75"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-medium">Phone</label>
                                <input
                                    type="text"
                                    placeholder="01XXXXXXXXX"
                                    {...register('phone', {
                                        required: 'Phone number is required',
                                        minLength: { value: 11, message: "Phone has to be 11 characters long" },
                                        maxLength: { value: 11, message: "Phone couldn't be exceeded 11 characters" }
                                    })}

                                    className={`bg-transparent outline outline-1 duration-300 focus:outline-4 p-2 mb-1 w-full rounded ${errors.phone ? 'outline-pink-700' : 'dark:outline-white/20 outline-black/30'}`}
                                />
                                {errors.phone && <p className="text-pink-700 font-semibold text-sm">{errors.phone.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-medium">Amount</label>
                                <input
                                    type="text"
                                    placeholder="XXX"
                                    {...register('amount', {
                                        required: 'Amount is required',
                                        min: { value: 500, message: "Minimum withdraw 500" }
                                    })}
                                    className={`bg-transparent outline outline-1 duration-300 focus:outline-4 p-2 mb-1 w-full rounded ${errors.amount ? 'outline-pink-700' : 'dark:outline-white/20 outline-black/30'}`}
                                />
                                {errors.amount && <p className="text-pink-700 font-semibold text-sm">{errors.amount.message}</p>}
                            </div>
                        </div>
                        <div className=" relative w-[90%] left-[5%] md:w-1/2 md:left-[25%] border border-black/30 dark:border-white/20 rounded">
                            <h1 className="text-center text-xl p-2 mb-4 font-semibold border-b border-black/30 dark:border-white/20">Choose An Option</h1>
                            {errors.paymentMethod && <p className="text-center text-rose-700 font-semibold">{errors.paymentMethod.message}</p>}
                            <div className="relative  p-4 justify-items-center grid grid-cols-3 gap-4">
                                <label
                                    className={`p-2 px-4 w-28 scale-75 md:scale-100 grid col-span-1 cursor-pointer rounded dark:bg-white/20 bg-black/30 transition duration-300 ${selectedValue === "bkash"
                                        ? "outline outline-4 outline-pink-700"
                                        : "outline-0"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        value="bkash"
                                        {...register("paymentMethod", {
                                            required: "Select a payment method"
                                        })}
                                        className="hidden"
                                    />
                                    <Image
                                        src={bkashLogo}
                                        alt="NF"
                                    />
                                    <p className="text-center font-semibold bg-black/30 rounded mt-2">Bkash</p>
                                </label>

                                <label
                                    className={`p-2 px-4 w-28 scale-75 md:scale-100 grid col-span-1 cursor-pointer rounded dark:bg-white/20 bg-black/30 transition duration-300 ${selectedValue === "nagad"
                                        ? "outline outline-4 outline-orange-700"
                                        : "outline-0"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        value="nagad"
                                        {...register("paymentMethod")}
                                        className="hidden"
                                    />
                                    <Image
                                        src={nagadLogo}
                                        alt="NF"
                                        className="rounded"
                                    />
                                    <p className="text-center font-semibold bg-black/30 rounded mt-2">Nagad</p>
                                </label>

                                <label
                                    className={`p-2 px-4 w-28 scale-75 md:scale-100 grid col-span-1 cursor-pointer rounded dark:bg-white/20 bg-black/30 transition duration-300 ${selectedValue === "rocket"
                                        ? "outline outline-4 outline-fuchsia-700"
                                        : "outline-0"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        value="rocket"
                                        {...register("paymentMethod")}
                                        className="hidden"
                                    />
                                    <div className="bg-gray-900 dark:bg-gray-200 h-[80px] rounded p-2">
                                        <Image
                                            src={rocketLogo}
                                            alt="NF"
                                            className="mt-2"
                                        />
                                    </div>
                                    <p className="text-center font-semibold bg-black/30 rounded mt-2">Rocket</p>
                                </label>
                            </div>
                        </div>
                        <div className="relative overflow-hidden my-4 w-[90%] left-[5%] md:w-1/2 md:left-[25%] border border-black/30 dark:border-white/20 rounded">
                            <button
                                type="submit"
                                className="px-6 py-2 w-full duration-300 hover:bg-white/20"
                            >
                                Withdraw
                            </button>
                        </div>
                    </form>
                </div>
            </>
        );
    } else {
        return (
            <Loading isLoading={true} message={"Loading Data..."} />
        );
    }
}

export default Withdraw;