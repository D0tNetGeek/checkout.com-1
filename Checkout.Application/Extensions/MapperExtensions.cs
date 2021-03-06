﻿using AutoMapper;
using System.Collections.Generic;

namespace Checkout.Extensions
{
    public static class MapperExtensions
    {
        /// <summary>
        /// Automapper wrapper. Maps a source object to destination based on mapping configurations
        /// </summary>
        public static TDestination Map<TDestination>(this object source)
            where TDestination : class
        {
            return Mapper.Map<TDestination>(source);
        }

        /// <summary>
        /// Automapper wrapper. Maps a source object to destination based on mapping configurations
        /// </summary>
        public static IList<TDestination> MapList<TDestination>(this IEnumerable<object> source)
            where TDestination : class
        {
            return Mapper.Map<IList<TDestination>>(source);
        }

        /// <summary>
        /// Automapper wrapper. Maps a source object to destination based on mapping configurations
        /// </summary>
        public static PagedResultDto<TDestination> MapPaged<TDestination>(this IEnumerable<object> source, PagerDto pager)
            where TDestination : class
        {
            var items = source.MapList<TDestination>();
            return new PagedResultDto<TDestination>(items, pager);
        }


    }
}
