
import  {CategoryManagement}  from '../components/shilla/CategoryManagement';
import BillCategories from '../components/shifa/BillCategories';
import AddNewBillCategory from '../components/shifa/AddNewBillCategory';
import Sidemenu from '../components/binoj/Sidemenu';

function Page() {
  return (
    <div className='bg-[#f9fafc] min-h-screen w-full'>
      

      <main className="lg:ml-65 px-4 py-6 pt-10 md:pt-12" >
        <div className="space-y-6">
          <Sidemenu/>
          <CategoryManagement />
          <BillCategories />
        </div>
      </main>
    </div>
  );
}

export default Page;
