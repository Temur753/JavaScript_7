let obj =["olma", "banan", "gilos", "shaftoli"]

console.log(obj)

alert(`Boshlanishida Arrayni uzunligi ${obj.length}`)

let push = confirm("Siz Arraydagi ma'lumotlarni o'chirib tashashni hohlaysizmi?")

if (push) {
    obj.pop("shaftoli")
    console.log(obj)
    alert(`Arrayni uzunligi ${obj.length}`)
}
else{

}
