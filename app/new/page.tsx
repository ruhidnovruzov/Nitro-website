"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addNew } from "../store/features/newCar.slice";

const New = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [brands, setBrands] = useState<any[]>([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const [file, setFile] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [cube, setCube] = useState('');
  const [km, setKm] = useState('');
  const [unitDistance, setUnitDistance] = useState('');
  const [unitMoney, setUnitMoney] = useState('');





  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20"
        );
        const data = await response.json();
        const brandsData = data?.results
          ? Array.from(new Set(data.results.map((item: any) => item.make)))
          : [];
        console.log(brandsData);
        console.log(data);
        setBrands(brandsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleBrandChange = (e: any) => {
    setSelectedBrand(e.target.value);
  };

  function handleChange(e:any) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}

const handlePriceChange = (e: any) => {
    setPrice(e.target.value);
  };
  const handleYearChange = (e: any) => {
    setYear(e.target.value);
  };
  const handleCubeChange = (e: any) => {
    setCube(e.target.value);
  };
  const handleKmChange = (e: any) => {
    setKm(e.target.value);
  };
  const handleUnitChange = (e: any) => {
    setUnitDistance(e.target.value);
  };
  const handleUnitMoneyChange = (e: any) => {
    setUnitMoney(e.target.value);
  };

  const addNewAnnouncement = () => {
    dispatch(addNew({ brand: selectedBrand, image: file, price:  price, year: year, cube: cube, km: km, unit: unitDistance, money: unitMoney}));
    router.push("/");
  };
  

  return (
    <div className=" w-[70%] mx-auto text-sm">
      <div className="px-10 py-4 bg-[#F1F3F7]">
        <h1 className="text-2xl font-bold">ELAN YERLƏŞDİRMƏK</h1>
      </div>
      <div className="mt-5">
        <ul className="list-disc list-inside text-sm">
          <li>
            Üç ay ərzində bir nəqliyyat vasitəsi yalnız bir dəfə pulsuz dərc
            oluna bilər.
          </li>
          <li>
            Üç ay ərzində təkrar və ya oxşar elanlar (marka/model, rəng)
            ödənişlidir.
          </li>
          <li>
            Elanınızı saytın ön sıralarında görmək üçün İrəli çək xidmətindən
            istifadə edin.
          </li>
        </ul>
      </div>
      <div className="flex justify-between  w-full mt-12">
        <div className="w-[45%] flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <label>
              Marka<span className="text-red-600">*</span>
            </label>
            <select
              onChange={handleBrandChange}
              className=" border w-[60%] h-9 pl-2 rounded-[8px]"
            >
              <option value="">Seçin</option>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label>
              Model<span className="text-red-600">*</span>
            </label>
            <select
              name=""
              id=""
              className=" border w-[60%] h-9 pl-2 rounded-[8px]"
            >
              <option value="">Seçin</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label>
              Ban növü<span className="text-red-600">*</span>
            </label>
            <select
              name=""
              id=""
              className=" border w-[60%] h-9 pl-2 rounded-[8px]"
            >
              <option value=""></option>
              <option value="9">Avtobus</option>
              <option value="16">Dartqı</option>
              <option value="14">Furqon</option>
              <option value="2">Hetçbek</option>
              <option value="11">Kabriolet</option>
              <option value="26">Karvan</option>
              <option value="3">Kupe</option>
              <option value="25">Kvadrosikl</option>
              <option value="28">Liftbek</option>
              <option value="7">Mikroavtobus</option>
              <option value="5">Minivan</option>
              <option value="27">Moped</option>
              <option value="20">Motosiklet</option>
              <option value="21">Offroader / SUV</option>
              <option value="6">Pikap</option>
              <option value="22">Qolfkar</option>
              <option value="8">Rodster</option>
              <option value="1">Sedan</option>
              <option value="4">Universal</option>
              <option value="19">Van</option>
              <option value="13">Yük maşını</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label>
              Yürüş<span className="text-red-600">*</span>
            </label>
            <div className="flex w-[60%] items-center">
              <input
                type="text"
                onChange={handleKmChange}
                className="border w-[40%] h-9 pl-2 rounded-[8px]"
              />{" "}
              <input
                type="radio"
                name="name"
                value="km"
                onChange={handleUnitChange}
                className="ml-2 w-5 h-5 mr-1"
              />{" "}
              <label htmlFor="">km</label>
              <input
                type="radio"
                name="name"
                value="mi"
                onChange={handleUnitChange}
                className="ml-2 w-5 h-5 mr-1 text-red-600 bg-red-600"
              />{" "}
              <label htmlFor="">mi</label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label>
              Rəng<span className="text-red-600">*</span>
            </label>
            <select
              name=""
              id=""
              className=" border w-[60%] h-9 pl-2 rounded-[8px]"
            >
              <option value=""></option>
              <option value="5">Qara</option>
              <option value="27">Yaş Asfalt</option>
              <option value="7">Boz</option>
              <option value="8">Gümüşü</option>
              <option value="2">Ağ</option>
              <option value="12">Bej</option>
              <option value="35">Tünd qırmızı</option>
              <option value="1">Qırmızı</option>
              <option value="21">Çəhrayı</option>
              <option value="15">Narıncı</option>
              <option value="14">Qızılı</option>
              <option value="6">Sarı</option>
              <option value="4">Yaşıl</option>
              <option value="57">Açıq yaşıl</option>
              <option value="9">Mavi</option>
              <option value="3">Göy</option>
              <option value="11">Bənövşəyi</option>
              <option value="10">Qəhvəyi</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label>
              Qiymət<span className="text-red-600">*</span>
            </label>
            <div className="flex w-[60%] items-center">
              <input
                type="text"
                className="border w-[40%] h-9 pl-2 rounded-[8px]"
                onChange={e=>handlePriceChange(e)}
              />{" "}
              <input
                type="radio"
                name="money"
                value="AZN"
                onChange={handleUnitMoneyChange}
                className="ml-2 w-5 h-5 mr-1"
              />{" "}
              <label htmlFor="">AZN</label>
              <input
                type="radio"
                name="money"
                value="USD"
                onChange={handleUnitMoneyChange}
                className="ml-2 w-5 h-5 mr-1 text-red-600 bg-red-600"
              />{" "}
              <label htmlFor="">USD</label>
              <input
                type="radio"
                name="money"
                value="EUR"
                onChange={handleUnitMoneyChange}
                className="ml-2 w-5 h-5 mr-1"
              />{" "}
              <label htmlFor="">EUR</label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label>
              Neçənci sahibisiniz?<span className="text-red-600">*</span>
            </label>
            <select
              name=""
              id=""
              className=" border w-[60%] h-9 pl-2 rounded-[8px]"
            >
              <option value=""></option>
              <option value="1">Birinci</option>
              <option value="2">İkinci</option>
              <option value="3">Üçüncü</option>
              <option value="4">Dördüncü və ya daha çox</option>
            </select>
          </div>
        </div>

        <div className="w-[50%] flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <label>
              Yanacaq növü<span className="text-red-600">*</span>
            </label>
            <select
              name=""
              id=""
              className="border  w-[60%] h-9 pl-2 rounded-[8px]"
            >
              <option value=""></option>
              <option value="1">Benzin</option>
              <option value="2">Dizel</option>
              <option value="3">Qaz</option>
              <option value="4">Elektro</option>
              <option value="5">Hibrid</option>
              <option value="6">Plug-in Hibrid</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label>
              Ötürücü<span className="text-red-600">*</span>
            </label>
            <select
              name=""
              id=""
              className="border  w-[60%] h-9 pl-2 rounded-[8px]"
            >
              <option value=""></option>
              <option value="1">Arxa</option>
              <option value="2">Ön</option>
              <option value="3">Tam</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label>
              Sürətlər qutusu<span className="text-red-600">*</span>
            </label>
            <select
              name=""
              id=""
              className="border  w-[60%] h-9 pl-2 rounded-[8px]"
            >
              <option value=""></option>
              <option value="1">Mexaniki</option>
              <option value="2">Avtomat</option>
              <option value="3">Robotlaşdırılmış</option>
              <option value="4">Variator</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label>
              İl<span className="text-red-600">*</span>
            </label>
            <select
              name=""
              id=""
              onChange={handleYearChange}
              className="border  w-[60%] h-9 pl-2 rounded-[8px]"
            >
              <option value=""></option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1985">1985</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              <option value="1980">1980</option>
              <option value="1979">1979</option>
              <option value="1978">1978</option>
              <option value="1977">1977</option>
              <option value="1976">1976</option>
              <option value="1975">1975</option>
              <option value="1974">1974</option>
              <option value="1973">1973</option>
              <option value="1972">1972</option>
              <option value="1971">1971</option>
              <option value="1970">1970</option>
              <option value="1969">1969</option>
              <option value="1968">1968</option>
              <option value="1967">1967</option>
              <option value="1966">1966</option>
              <option value="1965">1965</option>
              <option value="1964">1964</option>
              <option value="1963">1963</option>
              <option value="1962">1962</option>
              <option value="1961">1961</option>
              <option value="1960">1960</option>
              <option value="1959">1959</option>
              <option value="1958">1958</option>
              <option value="1957">1957</option>
              <option value="1956">1956</option>
              <option value="1955">1955</option>
              <option value="1954">1954</option>
              <option value="1953">1953</option>
              <option value="1952">1952</option>
              <option value="1951">1951</option>
              <option value="1950">1950</option>
              <option value="1949">1949</option>
              <option value="1948">1948</option>
              <option value="1947">1947</option>
              <option value="1946">1946</option>
              <option value="1945">1945</option>
              <option value="1944">1944</option>
              <option value="1943">1943</option>
              <option value="1942">1942</option>
              <option value="1941">1941</option>
              <option value="1940">1940</option>
              <option value="1939">1939</option>
              <option value="1938">1938</option>
              <option value="1937">1937</option>
              <option value="1936">1936</option>
              <option value="1935">1935</option>
              <option value="1934">1934</option>
              <option value="1933">1933</option>
              <option value="1932">1932</option>
              <option value="1931">1931</option>
              <option value="1930">1930</option>
              <option value="1929">1929</option>
              <option value="1928">1928</option>
              <option value="1927">1927</option>
              <option value="1926">1926</option>
              <option value="1925">1925</option>
              <option value="1924">1924</option>
              <option value="1923">1923</option>
              <option value="1922">1922</option>
              <option value="1921">1921</option>
              <option value="1920">1920</option>
              <option value="1919">1919</option>
              <option value="1918">1918</option>
              <option value="1917">1917</option>
              <option value="1916">1916</option>
              <option value="1915">1915</option>
              <option value="1914">1914</option>
              <option value="1913">1913</option>
              <option value="1912">1912</option>
              <option value="1911">1911</option>
              <option value="1910">1910</option>
              <option value="1909">1909</option>
              <option value="1908">1908</option>
              <option value="1907">1907</option>
              <option value="1906">1906</option>
              <option value="1905">1905</option>
              <option value="1904">1904</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label>
              Mühərrikin həcmi, sm3<span className="text-red-600">*</span>
            </label>
            <select
              name=""
              id=""
              onChange={handleCubeChange}
              className="border  w-[60%] h-9 pl-2 rounded-[8px]"
            >
              <option value=""></option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
              <option value="250">250</option>
              <option value="300">300</option>
              <option value="350">350</option>
              <option value="400">400</option>
              <option value="450">450</option>
              <option value="500">500</option>
              <option value="600">600</option>
              <option value="700">700</option>
              <option value="800">800</option>
              <option value="900">900</option>
              <option value="1000">1000</option>
              <option value="1100">1100</option>
              <option value="1200">1200</option>
              <option value="1300">1300</option>
              <option value="1400">1400</option>
              <option value="1500">1500</option>
              <option value="1600">1600</option>
              <option value="1700">1700</option>
              <option value="1800">1800</option>
              <option value="1900">1900</option>
              <option value="2000">2000</option>
              <option value="2100">2100</option>
              <option value="2200">2200</option>
              <option value="2300">2300</option>
              <option value="2400">2400</option>
              <option value="2500">2500</option>
              <option value="2600">2600</option>
              <option value="2700">2700</option>
              <option value="2800">2800</option>
              <option value="2900">2900</option>
              <option value="3000">3000</option>
              <option value="3100">3100</option>
              <option value="3200">3200</option>
              <option value="3300">3300</option>
              <option value="3400">3400</option>
              <option value="3500">3500</option>
              <option value="3600">3600</option>
              <option value="3700">3700</option>
              <option value="3800">3800</option>
              <option value="3900">3900</option>
              <option value="4000">4000</option>
              <option value="4100">4100</option>
              <option value="4200">4200</option>
              <option value="4300">4300</option>
              <option value="4400">4400</option>
              <option value="4500">4500</option>
              <option value="4600">4600</option>
              <option value="4700">4700</option>
              <option value="4800">4800</option>
              <option value="4900">4900</option>
              <option value="5000">5000</option>
              <option value="5100">5100</option>
              <option value="5200">5200</option>
              <option value="5300">5300</option>
              <option value="5400">5400</option>
              <option value="5500">5500</option>
              <option value="5600">5600</option>
              <option value="5700">5700</option>
              <option value="5800">5800</option>
              <option value="5900">5900</option>
              <option value="6000">6000</option>
              <option value="6100">6100</option>
              <option value="6200">6200</option>
              <option value="6300">6300</option>
              <option value="6400">6400</option>
              <option value="6500">6500</option>
              <option value="7000">7000</option>
              <option value="7500">7500</option>
              <option value="8000">8000</option>
              <option value="8500">8500</option>
              <option value="9000">9000</option>
              <option value="9500">9500</option>
              <option value="10000">10000</option>
              <option value="11000">11000</option>
              <option value="12000">12000</option>
              <option value="13000">13000</option>
              <option value="14000">14000</option>
              <option value="15000">15000</option>
              <option value="16000">16000</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label>
              Mühərrikin gücü, a.g. <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="border  w-[60%] h-9 pl-2 rounded-[8px]"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-nowrap">
              Hansı bazar üçün yığılıb<span className="text-red-600">*</span>
            </label>
            <select
              name=""
              id=""
              className="border  w-[60%] h-9 pl-2 rounded-[8px]"
            >
              <option value=""></option>
              <option value="">Amerka</option>
              <option value="">Avropa</option>
              <option value="">Çin</option>
              <option value="">Digər</option>
              <option value="">Dubay</option>
              <option value="">Koreya</option>
              <option value="">Rəsmi diller</option>
              <option value="">Rusiya</option>
              <option value="">Yaponiya</option>
            </select>
          </div>
        </div>
      </div>
      <div className=" w-full flex mt-7 flex-wrap">
        <div className="flex">
      <label>Vəziyyəti</label>
      <div className="w-full flex flex-wrap ml-32">
      <div className="w-[40%] flex gap-5">
      <input type="checkbox" className="w-6 h-6"/>
      <div className="flex flex-col gap-2">
      <span className="text-[16px] "> Vuruğu var</span>
      <span>Bir və ya bir neçə detalı dəyişdirilib və ya təmir olunub.</span>
      </div>
      </div>
      <div className="w-[40%] flex gap-5 ml-8">
      <input type="checkbox" className="w-7 h-7"/>
      <div className="flex flex-col gap-2">
      <span className="text-[16px] ">Rənglənib</span>
      <span>Bir və ya bir neçə detalı rənglənib və ya kosmetik işlər görülüb.</span>
      </div>
      </div>
      <div className="w-[40%] flex gap-5 mt-3">
      <input type="checkbox" className="w-6 h-6"/>
      <div className="flex flex-col gap-2">
      <span className="text-[16px] "> Qəzalı və ya ehtiyat hissələr üçün</span>
      <span>Təmirə ehtiyacı var və ya ümumiyyətlə yararsız vəziyyətdədir.</span>
      </div>
      </div>     
      </div>
      </div>
      </div>
      <div>
        <h1 className="text-xl font-bold mb-4">Avtomobilin şəkli</h1>
        <input type="file" accept="image/*" onChange={handleChange} />
        {file && <img src={file} className="h-60" />}
      </div>

      <div>
      <h1 className="text-xl font-bold mb-4 mt-8">Əlaqə</h1>
      <p>Elan dərc olunduqdan sonra əlaqə məlumatları ilə bağlı heç bir dəyişiklik həyata keçirilmir.</p>
      <div className="w-[45%] flex flex-col gap-4">
      <div className="flex items-center justify-between mt-4">
        <label>Adınız<span className="text-red-600">*</span></label>
        <input type="text" required={true} className=" border w-[60%] h-9 pl-2 rounded-[8px]" />
      </div>
      <div className="flex items-center justify-between mt-4">
        <label>Şəhər <span className="text-red-600">*</span></label>
        <select className="border  w-[60%] h-9 pl-2 rounded-[8px]">
            <option value="4">Ağdam</option>
            <option value="6">Ağdaş</option>
            <option value="5">Ağdərə</option>
            <option value="8">Ağstafa</option>
            <option value="10">Ağsu</option>
            <option value="9">Astara</option>
            <option value="78">Babək</option>
            <option selected={true} value="1">Bakı</option>
            <option value="14">Balakən</option>
            <option value="13">Beyləqan</option>
            <option value="12">Bərdə</option>
            <option value="15">Biləsuvar</option>
            <option value="26">Cəbrayıl</option>
            <option value="25">Cəlilabad</option>
            <option value="27">Culfa</option>
            <option value="24">Daşkəsən</option>
            <option value="23">Dəliməmmədli</option>
            <option value="60">Füzuli</option>
            <option value="36">Gədəbəy</option>
            <option value="2">Gəncə</option>
            <option value="18">Goranboy</option>
            <option value="17">Göyçay</option>
            <option value="19">Göygöl</option>
            <option value="20">Göytəpə</option>
            <option value="77">Hacıqabul</option>
            <option value="22">Horadiz</option>
            <option value="32">İmişli</option>
            <option value="33">İsmayıllı</option>
            <option value="37">Kəlbəcər</option>
            <option value="41">Kürdəmir</option>
            <option value="42">Laçın</option>
            <option value="43">Lerik</option>
            <option value="11">Lənkəran</option>
            <option value="44">Liman</option>
            <option value="45">Masallı</option>
            <option value="46">Mingəçevir</option>
            <option value="47">Naftalan</option>
            <option value="48">Naxçıvan</option>
            <option value="49">Neftçala</option>
            <option value="50">Oğuz</option>
            <option value="51">Ordubad</option>
            <option value="35">Qax</option>
            <option value="34">Qazax</option>
            <option value="16">Qəbələ</option>
            <option value="21">Qobustan</option>
            <option value="38">Quba</option>
            <option value="39">Qubadlı</option>
            <option value="40">Qusar</option>
            <option value="52">Saatlı</option>
            <option value="53">Sabirabad</option>
            <option value="68">Şabran</option>
            <option value="71">Şahbuz</option>
            <option value="54">Salyan</option>
            <option value="73">Şamaxı</option>
            <option value="55">Samux</option>
            <option value="72">Şəki</option>
            <option value="69">Şəmkir</option>
            <option value="70">Şərur</option>
            <option value="74">Şirvan</option>
            <option value="56">Siyəzən</option>
            <option value="3">Sumqayıt</option>
            <option value="75">Şuşa</option>
            <option value="58">Tərtər</option>
            <option value="57">Tovuz</option>
            <option value="59">Ucar</option>
            <option value="62">Xaçmaz</option>
            <option value="61">Xankəndi</option>
            <option value="67">Xırdalan</option>
            <option value="66">Xızı</option>
            <option value="64">Xocalı</option>
            <option value="63">Xocavənd</option>
            <option value="65">Xudat</option>
            <option value="76">Yardımlı</option>
            <option value="28">Yevlax</option>
            <option value="29">Zaqatala</option>
            <option value="30">Zəngilan</option>
            <option value="31">Zərdab</option>
        </select>
      </div>
      <div className="flex items-center justify-between mt-4">
        <label>Email<span className="text-red-600">*</span></label>
        <input type="email" required={true} className=" border w-[60%] h-9 pl-2 rounded-[8px]" />
      </div>
      <div className="flex items-center justify-between mt-4">
        <label>Telefon nömrəsi<span className="text-red-600">*</span></label>
        <input type="tel" required={true} placeholder="(000) 000-00-00" className=" border w-[60%] h-9 pl-2 rounded-[8px]" />
      </div>
      <div className="flex justify-end pb-7">
      <button className="bg-primary w-[60%] h-9 text-white rounded-[8px] text-[15px]" onClick={addNewAnnouncement}>Elanı yerləşdir</button>
      </div>
      </div>

      </div>


    </div>
  );
};

export default New;
