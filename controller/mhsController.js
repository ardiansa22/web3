exports.getData=((req,rest,next)=>{

return rest.status(200).json({
    
    id :"1",
    nama:"Ferian",
    kelas:"3IF"
})
})

exports.postData = (req, res, next) => {
    const nama = req.body.nama
    const kelas = req.body.kelas;
    const matakuliah1 = req.body.Matakuliah.matkul1;
    const matakuliah2 = req.body.Matakuliah.matkul2;
    const matakuliah3 = req.body.Matakuliah.matkul3;

    const ratarata = (matakuliah1 + matakuliah2 + matakuliah3)/3;

  

    
    // Membuat kalimat respons
    const kalimat = `Selamat pagi ${nama} ${kelas}. Rata-rata nilai mata kuliah: ${ratarata}`;


    return res.status(200).json({
        data: kalimat,
       
      
        
    })
}




