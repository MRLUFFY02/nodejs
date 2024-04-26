import os from 'os'
function hello()
{
    console.log(os.userInfo())
}



export const hello1 = hello
export const num = 1234
export function dummy() { console.log('dummy function') }