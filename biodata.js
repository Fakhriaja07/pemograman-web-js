import head from "./head";
import '../view/biodata.css';

function biodata() {
    return(
        <div class="container">
    <hr width="600px"/>
    <img src="FOTO1.jfif" height="250px" width="200px" align = "right"/>
    <table align="center" cellpadding="10px" width="600px" font="times New Roman">
        <tr>
            <td>Nama</td>
            <td>: Fakhri</td>
            <td rowspan="9" ></td>
        </tr>
        <tr>
            <td>Nim</td>
            <td>: 12250111381</td>
        </tr>
        <tr>
            <td>Tempat/Tgl Lahir</td>
            <td>: Pekanbaru, 07 April 2004</td>
        </tr>
        <tr>
            <td>Agama</td>
            <td>: Islam</td>
        </tr>
        <tr>
            <td>Alamat</td>
            <td>: Jalan Rajawali Sakti I,Kav II No.36</td>
        </tr>
        <tr>
            <td>Kelas</td>
            <td>: A</td>
        </tr>
        <tr>
            <td>Jurusan</td>
            <td>: Teknik Informatika</td>
        </tr>
        <tr>
            <td>Fakultas</td>
            <td>: Sains dan Teknologi</td>
        </tr>
        <tr>
            <td>Telepon/WhatsApp</td>
            <td>: 0895613048006</td>
        </tr>
        
    </table>
    </div>
    );
}
export default biodata;