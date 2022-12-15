export function timestamp2time(timestamp: number):string {
    var newDate = new Date();
    newDate.setTime( timestamp* 1000);
    return newDate.toLocaleDateString()
    
} 
export function timestamp2date(timestamp: number):string {
    var newDate = new Date();
    newDate.setTime( timestamp* 1000);
    return `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`
} 

// // https://bbchin.com/archives/vite2vue3ts
// export const getAssets = (name: String) => {
//     // 注意路径一定要以../assets开头，开发环境下，vite 会自动拼上 src
//     console.log(new URL(`@/assets/${name}`, import.meta.url).href)
//     return new URL(`@/assets/${name}`, import.meta.url).href
// }