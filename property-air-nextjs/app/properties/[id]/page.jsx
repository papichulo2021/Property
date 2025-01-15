import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import Link from 'next/link';
import connectDB from '@/config/database';
import Property from '@/models/Property';
import { FaArrowLeft } from 'react-icons/fa';
import PropertyDetails from '@/components/PropertyDetails';
import PropertyImages from '@/components/PropertiesImages';
import { convertToSerializableObject } from '@/utils/convertToObject';
import ShareButtons from '@/components/ShareButtons';
import BookmarkButton from '@/components/BookmarkButton';
import PropertyContactForm from '@/components/PropertyContactForm';

const PropertyPage = async ({ params }) => {
    await connectDB();
    const propertyDoc = await Property.findById(params.id).lean();
    const property = convertToSerializableObject(propertyDoc);

    if (!property) {
        return (
            <h1 className='text-center text-2xl font-bold mt-10'>
                Property Not Found
            </h1>
        );
    }

    return (
        <>
            <PropertyHeaderImage image={property.images[0]} />
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        href="/properties"
                        className="text-blue-500 hover:text-blue-600 flex items-center"
                    >
                        <FaArrowLeft className='mr-2' /> Back to Properties
                    </Link>
                </div>
            </section>
            <section className='bg-blue-50'>
                <div className='container m-auto py-10 px-6'>
                    <div className='flex flex-col md:flex-row gap-6'>
                        <div className='md:w-8/12'>
                            <PropertyDetails property={property} />
                        </div>
                        <aside className='md:w-4/12 space-y-4'>
                            <BookmarkButton property={property} />
                            <ShareButtons property={property} />
                            <PropertyContactForm property={property} />
                        </aside>
                    </div>
                </div>
            </section>
            <PropertyImages images={property.images} />
        </>
    );
};

export default PropertyPage;
