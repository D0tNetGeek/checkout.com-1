﻿using System.ComponentModel.DataAnnotations;

namespace Checkout.Location
{
    public class CountryDto : BaseDto<short>
    {
        [Required]
        [StringLength(35)]
        public override string Name { get; set; }

        [Required]
        [Range(typeof(decimal), "0", "100", ErrorMessage = "Tax must be a value between 0 and 100")]
        public decimal Tax { get; set; }

        public bool IsDefault { get; set; }

        public bool IsActive { get; set; }
    }
}
