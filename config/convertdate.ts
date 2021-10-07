export default function convertDate(date: string) {
  const dateString = new Date(date);
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const newFormat = `${days[dateString.getDay()]}, ${dateString.getDate()} ${
    months[dateString.getMonth()]
  } ${dateString.getFullYear()} ${dateString.getHours()}:${dateString.getMinutes()}:${dateString.getSeconds()}`;
  return newFormat;
}
