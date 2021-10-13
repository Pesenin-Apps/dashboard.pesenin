import QRCode from 'react-qr-code';

interface QrCodeProps {
  table: string;
}

export default function QrCode(props: QrCodeProps) {
  const { table } = props;

  const onImageDownload = () => {
    const svg = document.getElementById('QRCode') as HTMLImageElement; // OR as HTMLCanvasElement
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = `QRCode${table}`;
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <>
      <div className="my-3">
        <QRCode id="QRCode" value={table} size={200} />
      </div>
      <div className="mt-3">
        <input type="button" value="Cetak QR-Code" onClick={onImageDownload} className="btn btn-warning btn-sm rounded-pill" />
      </div>
    </>
  );
}
