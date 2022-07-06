describe("Link",async()=>{
    it("create link",async()=>{
        await browser.url("https://www.amazon.in/")
        var list=await browser.$("//a").getText()
        console.log(list);
    })
})