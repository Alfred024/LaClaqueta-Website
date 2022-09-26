export const getGifs = async( code ) => {

    const url = `https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=https://thisflow.me`;
    const resp = await fetch( url );
    const img  = await resp.json(); 
    
    
    return img;
}