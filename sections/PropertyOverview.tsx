const PropertyOverview = () => {
    return (
        <div class="container mx-auto px-4">
          <h3 class="text-[42px] font-extrabold text-[#ff3f3f] mb-8">Overview</h3>
          <div class="grid grid-cols-2 gap-4 w-fit">
            <div class="font-medium text-gray-700">Property Type</div>
            <div class="text-gray-900">Residential</div>
    
            <div class="font-medium text-gray-700">Location</div>
            <div class="text-gray-900">27 Astor Lane, Sands Point, NY 11050</div>
    
            <div class="font-medium text-gray-700">MLS ID</div>
            <div class="text-gray-900">H6309829</div>
    
            <div class="font-medium text-gray-700">Listing Last Updated</div>
            <div class="text-gray-900">7/22/2024 11:13 AM</div>
          </div>
        </div>
      );
}
 
export default PropertyOverview;