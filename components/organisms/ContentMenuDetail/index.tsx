import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import {
  deleteMenu, getMenuCategories, getMenuTypes, updateMenu,
} from '../../../services/cashier';
import { MenuCategoryTypes, MenuTypes, MenuTypeTypes } from '../../../services/data-types';
import NavButtonDetail from '../../molecules/NavButtonDetail';
import Header from './Header';

interface ContentMenuDetailProps {
  data: MenuTypes
}

export default function ContentMenuDetail(props: ContentMenuDetailProps) {
  const { data } = props;

  const [menu, setMenu] = useState<MenuTypes>({
    _id: '',
    name: '',
    price: 0,
    is_ready: false,
    description: '',
    image_url: '',
    category: {
      _id: '',
      name: '',
    },
    type: {
      _id: '',
      name: '',
    },
  });
  const [imagePreview, setImagePreview] = useState('/');

  const params = { };

  const router = useRouter();

  const updateFormatNumber = (val: number) => {
    const valCurrency = val.toString().replace(/\D/g, '');
    const x = Number(valCurrency);

    setMenu({ ...menu, price: x as unknown as number });
  };

  // fetch data
  const [categoryOption, setCategoryOption] = useState([]);
  const [typeOption, setTypeOption] = useState([]);

  const fetchDataAPI = useCallback(async (value) => {
    const getCategory = await getMenuCategories();
    const getType = await getMenuTypes(value);
    setCategoryOption(getCategory.data.data);
    setTypeOption(getType.data.data);
  }, [getMenuCategories, getMenuTypes]);

  useEffect(() => {
    fetchDataAPI(params);
    setMenu(data);
  }, []);

  const onSubmit = async () => {
    const dataUpdate = new FormData();
    dataUpdate.append('name', menu.name);
    dataUpdate.append('price', menu.price.toString());
    dataUpdate.append('is_ready', menu.is_ready.toString());
    dataUpdate.append('image', menu.image_url);
    dataUpdate.append('category', menu.category._id ?? menu.category);
    dataUpdate.append('type', menu.type._id ?? menu.type);
    const response = await updateMenu(dataUpdate, menu._id);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Berhasil, Produk telah diubah!');
      router.push('/cashier/menus');
    }
  };

  const onDestroy = () => {
    Swal.fire({
      title: 'Anda yakin menghapus?',
      text: 'Data ini akan dihapus secara permanen!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteMenu(data._id);
        if (!response.error) {
          router.push('/cashier/menus');
          toast.success('Berhasil, data telah dihapus!');
        } else {
          toast.error('Gagal, terjadi kesalahan!');
        }
      }
    });
  };

  return (
    <div className="menu-detail mb-30">
      <div className="container">
        <div className="main-content main-content-card overflow-auto">
          <section className="detail mx-auto">

            <NavButtonDetail
              hrefBack="/cashier/menus"
              onClickTrash={onDestroy}
            />

            <Header
              image={data.image_url}
              name={data.name}
              category={data.category.name}
              isReady={data.is_ready}
            />

            <hr />

            <div className="row d-flex pt-20">

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
                  value={menu.name}
                  onChange={(e) => setMenu({
                    ...menu,
                    name: e.target.value,
                  })}
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
                  value={menu.price.toLocaleString().replace(/[,.]/g, (m) => (m === ',' ? '.' : ','))}
                  onChange={(e) => updateFormatNumber(e.target.value as unknown as number)}
                />
              </div>

              <div className="pb-20">
                <label className="form-label text-lg fw-medium color-palette-0 mb-10">
                  Kategori
                  {' '}
                  <span className="text-danger"> * </span>
                </label>
                <select
                  className="form-select rounded-pill text-lg"
                  value={menu.category._id}
                  onChange={(e) => setMenu({
                    ...menu,
                    category: e.target.value as unknown as MenuCategoryTypes,
                  })}
                >
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
                <select
                  className="form-select rounded-pill text-lg"
                  value={menu.type._id}
                  onChange={(e) => setMenu({
                    ...menu,
                    type: e.target.value as unknown as MenuTypeTypes,
                  })}
                >
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
                <select
                  className="form-select rounded-pill text-lg"
                  value={menu.is_ready as unknown as string}
                  onChange={(e) => setMenu({
                    ...menu,
                    is_ready: e.target.value as unknown as boolean,
                  })}
                >
                  <option>--- Pilih Status ---</option>
                  <option value="false">Tidak Tersedia Saat Ini</option>
                  <option value="true">Tersedia Saat Ini</option>
                </select>
              </div>

              <div className="pb-20">
                <label className="form-label text-lg fw-medium color-palette-0 mb-10">
                  Ganti Gambar
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
                    return setMenu({
                      ...menu,
                      image_url: img as unknown as string,
                    });
                  }}
                />
                {imagePreview !== '/' && (
                  <div className="mt-3 mx-3">
                    <figure className="figure">
                      <figcaption className="figure-caption mb-1">Tinjauan Gambar :</figcaption>
                      <img src={imagePreview} className="img-upload" alt="upload" width={360} />
                    </figure>
                  </div>
                )}
              </div>

            </div>
            <div className="d-md-block d-flex flex-column w-100 pt-20">
              <button type="button" className="btn btn-primary fw-medium text-white text-lg" onClick={onSubmit}>
                Simpan
              </button>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
