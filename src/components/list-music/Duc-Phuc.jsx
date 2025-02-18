import React from "react";

function DucPhuc() {
  return (
    <div>
      <div class="flex items-center justify-between p-4 bg-white shadow rounded-lg">
        <div class="flex items-center">
          <img
            src="/public/duc-phuc.jpg"
            alt="Image of Duc Phuc"
            class="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p class="font-semibold text-red">Duc Phuc</p>
            <p class="text-gray-500 text-large">Music</p>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <span class="text-gray-500">05</span>
          <i class="far fa-heart text-gray-500"></i>
          <i class="fas fa-play text-gray-500"></i>
        </div>
      </div>
    </div>
  );
}

export default DucPhuc;
