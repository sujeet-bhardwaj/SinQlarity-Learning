  async function givename(){
    return "Coding write"
  }

async function main() {
    const name=await givename()
    console.log("name is ",name)
}
main()