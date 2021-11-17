import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getMenuCategories, getMenuTypes, setMenus } from '../../../services/cashier';
import { MenuCategoryTypes, MenuTypeTypes } from '../../../services/data-types';
import NavButtonCreate from '../../molecules/NavButtonCreate';

export default function ContentMenuCreate() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [ready, setReady] = useState('');
  const [image, setImage] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>(null);

  // fetch data
  const [categoryOption, setCategoryOption] = useState([]);
  const [typeOption, setTypeOption] = useState([]);

  const router = useRouter();

  const updateFormatNumber = (val: string) => {
    const valCurrency = val.replace(/\D/g, '');
    const x = Number(valCurrency);

    setPrice(x as unknown as string);
  };

  const fetchAllData = useCallback(async () => {
    const getCategory = await getMenuCategories();
    const getType = await getMenuTypes();
    setCategoryOption(getCategory.data.data);
    setTypeOption(getType.data.data);
  }, [getMenuCategories, getMenuTypes]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const onSubmit = async () => {
    if (!name) {
      toast.error('Masukkan nama Produk!');
    } else if (!price) {
      toast.error('Masukkan harga Produk!');
    } else if (!category) {
      toast.error('Masukkan kategori Produk!');
    } else if (!type) {
      toast.error('Masukkan section Produk!');
    } else if (!ready) {
      toast.error('Masukkan status Produk!');
    } else {
      const data = new FormData();
      data.append('name', name);
      data.append('price', price);
      data.append('image', image);
      data.append('category', category);
      data.append('type', type);
      data.append('is_ready', ready);
      const result = await setMenus(data);
      if (result.error) {
        toast.error(result.message);
      } else {
        toast.success('Berhasil, Produk telah ditambahkan!');
        router.push('/cashier/menus');
      }
    }
  };

  return (
    <div className="menu-create mb-30">
      <div className="container">

        <div className="main-content main-content-card overflow-auto">
          <section className="create mx-auto">
            <NavButtonCreate hrefBack="/cashier/menus" />
            <div className="d-flex flex-row  align-items-center justify-content-between mt-10 mb-30">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <p className="fw-bold text-xl color-palette-0 mb-10">Tambah Produk baru</p>
                  <p className="color-palette-5 m-0">Isi Data Yang Valid</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="row d-flex pt-20">
              <form action="">

                <div className="pb-20">
                  <label className="form-label text-lg fw-medium color-palette-0 mb-10">
                    Nama
                    {' '}
                    <span className="text-danger"> * </span>
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill text-lg"
                    placeholder="Masukkan Nama Produk"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="pb-20">
                  <label className="form-label text-lg fw-medium color-palette-0 mb-10">
                    Harga
                    {' '}
                    (Rp.)
                    <span className="text-danger"> * </span>
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill text-lg"
                    placeholder="Masukkan Harga Produk"
                    value={price.toLocaleString().replace(/[,.]/g, (m) => (m === ',' ? '.' : ','))}
                    onChange={(e) => updateFormatNumber(e.target.value)}
                  />
                </div>

                <div className="pb-20">
                  <label className="form-label text-lg fw-medium color-palette-0 mb-10">
                    Kategori
                    {' '}
                    <span className="text-danger"> * </span>
                  </label>
                  <select className="form-select rounded-pill text-lg" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>--- Pilih Kategori ---</option>
                    {categoryOption.map((item: MenuCategoryTypes) => (
                      <option key={item._id} value={item._id}>{item.name}</option>
                    ))}
                  </select>
                </div>

                <div className="pb-20">
                  <label className="form-label text-lg fw-medium color-palette-0 mb-10">
                    Section
                    {' '}
                    <span className="text-danger"> * </span>
                  </label>
                  <select className="form-select rounded-pill text-lg" value={type} onChange={(e) => setType(e.target.value)}>
                    <option>--- Pilih Section ---</option>
                    {typeOption.map((item: MenuTypeTypes) => (
                      <option key={item._id} value={item._id}>{item.name}</option>
                    ))}
                  </select>
                </div>

                <div className="pb-20">
                  <label className="form-label text-lg fw-medium color-palette-0 mb-10">
                    Status
                    {' '}
                    <span className="text-danger"> * </span>
                  </label>
                  <select className="form-select rounded-pill text-lg" value={ready} onChange={(e) => setReady(e.target.value)}>
                    <option>--- Pilih Status ---</option>
                    <option value="false">Tidak Tersedia Saat Ini</option>
                    <option value="true">Tersedia Saat Ini</option>
                  </select>
                </div>

                <div className="pb-20">
                  <label className="form-label text-lg fw-medium color-palette-0 mb-10">
                    Gambar
                    {' '}
                    <span className="text-secondary"> * </span>
                  </label>
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    className="form-control rounded-pill text-lg"
                    onChange={(event) => {
                      const img = event.target.files![0];
                      setImagePreview(URL.createObjectURL(img));
                      return setImage(img);
                    }}
                  />
                  {imagePreview && (
                    <div className="mt-3 mx-3">
                      <figure className="figure">
                        <figcaption className="figure-caption mb-1">Tinjauan Gambar :</figcaption>
                        <img src={imagePreview} className="img-upload" alt="upload" width={360} />
                      </figure>
                    </div>
                  )}
                </div>

              </form>
            </div>
            <div className="d-md-block d-flex flex-column w-100 pt-20">
              <button type="button" className="btn btn-primary fw-medium text-white text-lg" onClick={onSubmit}>
                Tambah
              </button>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
