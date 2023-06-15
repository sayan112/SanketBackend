const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
require("dotenv").config();

console.log(process.env.BOT_TOKEN);

const bot = new Telegraf(process.env.BOT_TOKEN);
console.log(bot);

const socialLinks = [
  { name: "facebook", url: "https://www.facebook.com/sayan.maitra.5437/" },
  { name: "messenger", url: "https://www.facebook.com/sayan.maitra.5437/" },
  { name: "instagram", url: "https://www.instagram.com/sayan_11_maitra/" },
  { name: "twitter", url: "https://twitter.com/SayanMaitra12" },
  { name: "youtube", url: "https://www.youtube.com/@nike" },
];

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
      img: "https://iili.io/HSfDRkJ.png",
    },
    {
      id: "0M0x2",
      title: "Nike Air Force Green",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
      img: "https://iili.io/HSfDIrF.png",
    },
    {
      id: "0M0x3",
      title: "Nike Addapt BB Rose",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
      img: "https://iili.io/HSfDA7a.md.png",
    },
    {
      id: "0M0x4",
      title: "Nike Air Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
      img: "https://iili.io/HSfDudg.md.png",
    },
    {
      id: "0M0x5",
      title: "Nike Adapt BB Pro",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
      img: "https://iili.io/HSfD5mv.md.png",
    },
    {
      id: "0M0x6",
      title: "Air Jordan PR3",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
      img: "https://iili.io/HSfDaXp.md.png",
    },
    {
      id: "0M0x7",
      title: "Nike Multi Smart Shoe",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
      img: "https://iili.io/HSfDYIR.md.png",
    },
    {
      id: "0M0x8",
      title: "Nike Jordan Air Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
      img: "https://iili.io/HSfDcLN.md.png",
    },
    {
      id: "0M0x9",
      title: "Nike Old Max-x",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
      img: "https://iili.io/HSfD0BI.md.png",
    },
    {
      id: "0M0x10",
      title: "Nike Lime Jordan 11",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
      img: "https://iili.io/HSfD11t.md.png",
    },
    {
      id: "0M0x11",
      title: "Nike Air Black Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
      img: "https://iili.io/HSfDM2n.md.png",
    },
    {
      id: "0M0x12",
      title: "Nike Zoom Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      price: "150",
      color: "from-blue-900 to-blue-500",
      img: "https://iili.io/HSfDV7s.md.png",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};
bot.start((ctx) =>
  ctx.reply(
    "👋 Welcome to our sneaker website! We're excited to have you here and share our passion for quality footwear with you. 👟💪\n\nAt our site, you'll find a wide selection of sneakers from top brands that are sure to satisfy any sneaker enthusiast. Whether you're looking for the latest releases or classic styles, we've got you covered. \n\nWe're committed to providing a seamless shopping experience, with fast shipping 🚚 and excellent customer service. 💯\n\nDon't forget to visit our website at https://buy-sneakers.vercel.app/ to explore our full collection of sneakers and find your perfect pair of kicks today! 🎉 \n\n Don't forget to try /topsale , /imgsnekars"
  )
);
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on(message("sticker"), (ctx) => ctx.reply("We Love sneakers 😊👟💖"));
bot.hears("hi", (ctx) =>
  ctx.reply("Hey there👟 , How can I help you... Try /topsale /imgsnekars")
);

bot.command("sociallinks", (ctx) => {
  const socialLinksMessage = socialLinks
    .map((link) => `${link.name}: ${link.url}`)
    .join("\n");
  ctx.replyWithMarkdown(`Here are our social links:\n${socialLinksMessage}`);
});

bot.command("topsale", async (ctx) => {
  let message = `Here are the top rated sales:\n\n`;
  const sales = toprateslaes.items;

  sales.forEach((sale) => {
    message += `${sale.title}\n`;
    message += `Price: ${sale.price}\n`;
    message += `Rating: ${sale.rating}\n`;
    message += `Color: ${sale.color}\n\n`;
  });

  ctx.reply(message);
});

bot.command("imgsnekars", async (ctx) => {
  const sales = toprateslaes.items;
  sales.map(async (sale) => {
    const imageUrl = sale.img;
    const caption = sale.title;
    try {
      await ctx.replyWithPhoto({ url: imageUrl }, { caption: caption });
    } catch (err) {
      console.error(err);
      ctx.reply("Failed to send image");
    }
  });
   setTimeout(()=>{
   ctx.reply(
     "To buy these shoes , Visit our website https://buy-sneakers.vercel.app/ 👟💲"
   );
   },5000)

});

// Command handler for /quit
bot.command("quit", (ctx) => {
  ctx.reply("Goodbye!");
  // Use the `stop` method to stop the bot
  bot.stop();
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
