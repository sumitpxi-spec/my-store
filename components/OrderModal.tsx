"use client";

import { useState } from "react";

export default function OrderModal({ product }: any) {
  const [open, setOpen] = useState(false);

  async function submit(e: any) {
    e.preventDefault();

    const form = e.target;

    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userEmail: form.email.value,
        products: [{ title: product.title, price: product.price }],
        shipping: {
          name: form.name.value,
          address: form.address.value,
        },
      }),
    });

    window.location.href = "/order-success";
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>Order Now</button>

      {open && (
        <form onSubmit={submit}>
          <input name="name" placeholder="Name" required />
          <input name="email" placeholder="Email" required />
          <textarea name="address" placeholder="Address" required />
          <button>Confirm</button>
        </form>
      )}
    </>
  );
}
