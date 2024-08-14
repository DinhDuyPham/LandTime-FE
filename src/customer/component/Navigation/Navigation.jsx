
import { Fragment, useState } from 'react'
import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  MenuItem,

  PopoverGroup,


} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ClassNames } from '@emotion/react'
import { Avatar, Menu } from '@mui/material'
import { deepPurple } from '@mui/material/colors'

const navigation = {

  pages: [
    { name: 'TRANG CHỦ', href: '#' },
    { name: 'ĐỒNG HỒ NAM', href: '#' },
    { name: 'ĐỒNG HỒ NỮ', href: '#' },
    { name: 'PHỤ KIỆN', href: '#' },
    { name: 'GIỚI THIỆU', href: '#' },
  ],
}
function className(...classes) {
  return classes.filter(Boolean).join("");
}
export default function Navigation() {

  const test = Boolean(1)

  const [open, setOpen] = useState(false)
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };
  const handleOpen = () => {
    setOpenAuthModal(false);
  };
  // const handleCategoryClick = (category, section, item, close) => {
  //   //navigation ('/${category.id}/${section.id}/${item.id}');
  //   close();
  // }



  return (
    <div className="bg-white uppercase ">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden ">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>




            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {test ? (
                <div className="flow-root">
                  <a href="#" className="-m-2 block p-3 font-medium text-gray-900">Trang Cá Nhân</a>
                  <a href="#" className="-m-2 block p-4 font-medium text-gray-900">Đơn Hàng Của Tôi</a>
                  <a href="#" className="-m-2 block p-4 font-medium text-gray-900">Đăng Xuất</a>
                </div>) : (
                <div className="flow-root">

                  <a href="#" className="-m-2 block p-4 font-medium text-gray-900">
                 ĐĂNG NHẬP
                  </a>


                  <a href="#" className="-m-2 block p-4 font-medium text-gray-900">
                   ĐĂNG KÝ
                  </a>

                </div>
              )}

            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          LandTime
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="/ss.png"
                    className="h-12 w-auto"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  {test ? (
                    <div>
                      <Avatar
                        className='text-white'
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        // onClick={handleUserClick}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}>
                        R
                      </Avatar>

                      <Menu id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <div onClick={handleCloseUserMenu} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                          <a href="/profile" className="text-gray-900">Trang Cá Nhân</a>
                        </div>
                        <div onClick={handleCloseUserMenu} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                          <a href="/orders" className="text-gray-900">Đơn Hàng Của Tôi</a>
                        </div>
                        <div onClick={handleCloseUserMenu} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                          <a href="/logout" className="text-gray-900">Đăng Xuất</a>
                        </div>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Đăng nhập
                    </Button>
                  )}
                </div>



                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Button className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">2</span>
                    <span className="sr-only">Sản Phẩm Trong Giỏ Hàng, Xem Giỏ Hàng</span>
                  </Button>



                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
